<?php
use Illuminate\Support\Facades\Broadcast;
use App\Models\Conversation;
use App\Models\Enrollment;

// Private channel for conversation
Broadcast::channel('conversation.{conversationId}', function ($user, $conversationId) {
  $conversation = Conversation::find($conversationId);
  if (!$conversation) return false;
  
  // Check if user is participant
  if (!$conversation->isParticipant($user->userId)) return false;
  
  // For learner chatting with instructor, check payment if conversation has courseId
  if ($user->isLearner() && $conversation->courseId) {
    $otherUser = $conversation->getOtherUser($user->userId);
    // Only check enrollment if chatting with instructor
    if ($otherUser && $otherUser->isInstructor()) {
      return Enrollment::where('userId', $user->userId)
        ->where('courseId', $conversation->courseId)
        ->where('isPaid', true)
        ->exists();
    }
  }
  return true;
});

// Presence channel for online status
Broadcast::channel('chat.online', function ($user) {
  return [
    'id' => $user->userId,
    'name' => $user->userName,
    'role' => $user->role,
  ];
});
