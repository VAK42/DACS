<?php
namespace App\Http\Controllers\Shared;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Conversation;
use App\Models\ConversationParticipant;
use App\Models\ChatMessage;
use App\Models\User;
use App\Models\Enrollment;
use App\Events\MessageSent;
use App\Events\MessagesRead;
use App\Events\UserTyping;
use Illuminate\Support\Facades\Storage;
class ChatController extends Controller
{
  public function index()
  {
    $user = auth()->user();
    $conversations = Conversation::forUser($user->userId)
      ->with(['user1', 'user2', 'course', 'latestMessage'])
      ->orderBy('lastMessageAt', 'desc')
      ->get()
      ->map(function ($conv) use ($user) {
        $otherUser = $conv->getOtherUser($user->userId);
        return [
          'conversationId' => $conv->conversationId,
          'type' => $conv->type,
          'name' => $conv->type === 'group' ? $conv->name : $otherUser?->userName,
          'courseId' => $conv->courseId,
          'courseName' => $conv->course?->courseTitle,
          'otherUser' => $otherUser ? [
            'userId' => $otherUser->userId,
            'userName' => $otherUser->userName,
            'role' => $otherUser->role,
          ] : null,
          'lastMessage' => $conv->latestMessage?->content,
          'lastMessageAt' => $conv->lastMessageAt,
          'unreadCount' => $conv->unreadCountFor($user->userId),
        ];
      });
    return Inertia::render('Shared/ChatPage', [
      'conversations' => $conversations,
    ]);
  }
  
  public function getContacts()
  {
    $user = auth()->user();
    $contacts = [];
    if ($user->isLearner()) {
      // Get instructors and learners from paid enrolled courses
      $enrolledCourseIds = Enrollment::where('userId', $user->userId)
        ->where('isPaid', true)
        ->pluck('courseId');
      // Instructors of enrolled courses
      $instructors = User::whereHas('courses', fn($q) => $q->whereIn('courseId', $enrolledCourseIds))
        ->where('userId', '!=', $user->userId)
        ->get()
        ->map(fn($u) => [
          'userId' => $u->userId,
          'userName' => $u->userName,
          'role' => $u->role,
          'courseIds' => $u->courses()->whereIn('courseId', $enrolledCourseIds)->pluck('courseId'),
        ]);
      // Other learners in same courses
      $otherLearners = User::whereHas('enrollments', function ($q) use ($enrolledCourseIds, $user) {
          $q->whereIn('courseId', $enrolledCourseIds)->where('isPaid', true);
        })
        ->where('userId', '!=', $user->userId)
        ->get()
        ->map(fn($u) => [
          'userId' => $u->userId,
          'userName' => $u->userName,
          'role' => $u->role,
          'courseIds' => Enrollment::where('userId', $u->userId)
            ->whereIn('courseId', $enrolledCourseIds)
            ->where('isPaid', true)
            ->pluck('courseId'),
        ]);
      $contacts = ['instructors' => $instructors, 'learners' => $otherLearners];
    } elseif ($user->isInstructor()) {
      // All other instructors
      $instructors = User::where('role', 'instructor')
        ->where('userId', '!=', $user->userId)
        ->get()
        ->map(fn($u) => [
          'userId' => $u->userId,
          'userName' => $u->userName,
          'role' => $u->role,
        ]);
      // Learners enrolled in instructor's courses
      $myCourseIds = $user->courses()->pluck('courseId');
      $learners = User::whereHas('enrollments', function ($q) use ($myCourseIds) {
          $q->whereIn('courseId', $myCourseIds)->where('isPaid', true);
        })
        ->get()
        ->map(fn($u) => [
          'userId' => $u->userId,
          'userName' => $u->userName,
          'role' => $u->role,
          'courseIds' => Enrollment::where('userId', $u->userId)
            ->whereIn('courseId', $myCourseIds)
            ->where('isPaid', true)
            ->pluck('courseId'),
        ]);
      $contacts = ['instructors' => $instructors, 'learners' => $learners];
    }
    return response()->json($contacts);
  }
  
  public function getConversations()
  {
    $user = auth()->user();
    $conversations = Conversation::forUser($user->userId)
      ->with(['user1', 'user2', 'course', 'latestMessage'])
      ->orderBy('lastMessageAt', 'desc')
      ->get()
      ->map(function ($conv) use ($user) {
        $otherUser = $conv->getOtherUser($user->userId);
        return [
          'conversationId' => $conv->conversationId,
          'type' => $conv->type,
          'name' => $conv->type === 'group' ? $conv->name : $otherUser?->userName,
          'courseId' => $conv->courseId,
          'courseName' => $conv->course?->courseTitle,
          'otherUser' => $otherUser ? [
            'userId' => $otherUser->userId,
            'userName' => $otherUser->userName,
            'role' => $otherUser->role,
          ] : null,
          'lastMessage' => $conv->latestMessage?->content,
          'lastMessageAt' => $conv->lastMessageAt,
          'unreadCount' => $conv->unreadCountFor($user->userId),
        ];
      });
    return response()->json($conversations);
  }
  
  public function createConversation(Request $request)
  {
    $request->validate([
      'targetUserId' => 'required|exists:users,userId',
      'courseId' => 'nullable|exists:courses,courseId',
    ]);
    $user = auth()->user();
    $targetUserId = $request->targetUserId;
    $courseId = $request->courseId;
    // Authorization check for learners
    if ($user->isLearner() && $courseId) {
      $hasPaidEnrollment = Enrollment::where('userId', $user->userId)
        ->where('courseId', $courseId)
        ->where('isPaid', true)
        ->exists();
      if (!$hasPaidEnrollment) {
        return response()->json(['error' => 'You must be enrolled and paid for this course'], 403);
      }
    }
    $conversation = Conversation::findOrCreatePrivate($user->userId, $targetUserId, $courseId);
    return response()->json([
      'conversationId' => $conversation->conversationId,
      'message' => 'Conversation created successfully',
    ]);
  }
  
  public function getMessages(Request $request, $conversationId)
  {
    $user = auth()->user();
    $conversation = Conversation::findOrFail($conversationId);
    if (!$conversation->isParticipant($user->userId)) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }
    // Cursor pagination
    $cursor = $request->query('cursor');
    $limit = $request->query('limit', 30);
    $query = ChatMessage::where('conversationId', $conversationId)
      ->with('sender')
      ->orderBy('createdAt', 'desc');
    if ($cursor) {
      $query->where('messageId', '<', $cursor);
    }
    $messages = $query->limit($limit)->get()->map(fn($m) => [
      'messageId' => $m->messageId,
      'conversationId' => $m->conversationId,
      'senderId' => $m->senderId,
      'senderName' => $m->sender->userName,
      'type' => $m->type,
      'content' => $m->content,
      'filePath' => $m->filePath,
      'fileName' => $m->fileName,
      'isRead' => $m->isRead,
      'createdAt' => $m->createdAt->toISOString(),
    ]);
    $nextCursor = $messages->count() === $limit ? $messages->last()['messageId'] : null;
    return response()->json([
      'messages' => $messages->reverse()->values(),
      'nextCursor' => $nextCursor,
    ]);
  }
  
  public function sendMessage(Request $request, $conversationId)
  {
    $request->validate([
      'content' => 'required_without:file|string|max:5000',
      'type' => 'in:text,image,file',
    ]);
    $user = auth()->user();
    $conversation = Conversation::findOrFail($conversationId);
    if (!$conversation->isParticipant($user->userId)) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }
    $message = ChatMessage::create([
      'conversationId' => $conversationId,
      'senderId' => $user->userId,
      'type' => $request->type ?? 'text',
      'content' => $request->content,
    ]);
    $conversation->update(['lastMessageAt' => now()]);
    
    // Broadcast immediately
    broadcast(new MessageSent($message))->toOthers();
    
    return response()->json([
      'messageId' => $message->messageId,
      'content' => $message->content,
      'createdAt' => $message->createdAt->toISOString(),
      'type' => $message->type,
      'senderId' => $user->userId,
      'isRead' => false,
    ], 200);
  }
  
  public function uploadFile(Request $request, $conversationId)
  {
    $request->validate([
      'file' => 'required|file|max:10240', // 10MB max
    ]);
    $user = auth()->user();
    $conversation = Conversation::findOrFail($conversationId);
    if (!$conversation->isParticipant($user->userId)) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }
    $file = $request->file('file');
    $path = $file->store('chat-files', 'public');
    $type = str_starts_with($file->getMimeType(), 'image/') ? 'image' : 'file';
    $message = ChatMessage::create([
      'conversationId' => $conversationId,
      'senderId' => $user->userId,
      'type' => $type,
      'filePath' => Storage::url($path),
      'fileName' => $file->getClientOriginalName(),
    ]);
    $conversation->update(['lastMessageAt' => now()]);
    broadcast(new MessageSent($message))->toOthers();
    return response()->json([
      'messageId' => $message->messageId,
      'filePath' => $message->filePath,
      'fileName' => $message->fileName,
      'type' => $type,
    ]);
  }
  
  public function markAsRead($conversationId)
  {
    $user = auth()->user();
    $conversation = Conversation::findOrFail($conversationId);
    if (!$conversation->isParticipant($user->userId)) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }
    ChatMessage::where('conversationId', $conversationId)
      ->where('senderId', '!=', $user->userId)
      ->where('isRead', false)
      ->update(['isRead' => true, 'readAt' => now()]);
    broadcast(new MessagesRead($conversationId, $user->userId))->toOthers();
    return response()->json(['success' => true]);
  }
  
  public function typing($conversationId)
  {
    $user = auth()->user();
    $conversation = Conversation::findOrFail($conversationId);
    if (!$conversation->isParticipant($user->userId)) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }
    broadcast(new UserTyping($conversationId, $user->userId, $user->userName))->toOthers();
    return response()->json(['success' => true]);
  }
}
