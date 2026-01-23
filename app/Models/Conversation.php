<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Conversation extends Model
{
  protected $table = 'conversations';
  protected $primaryKey = 'conversationId';
  const CREATED_AT = 'createdAt';
  const UPDATED_AT = 'updatedAt';
  protected $fillable = [
    'type',
    'user1Id',
    'user2Id',
    'courseId',
    'name',
    'lastMessageAt',
  ];
  protected $casts = [
    'lastMessageAt' => 'datetime',
  ];
  
  // Relationships
  public function user1()
  {
    return $this->belongsTo(User::class, 'user1Id', 'userId');
  }
  public function user2()
  {
    return $this->belongsTo(User::class, 'user2Id', 'userId');
  }
  public function course()
  {
    return $this->belongsTo(Course::class, 'courseId', 'courseId');
  }
  public function messages()
  {
    return $this->hasMany(ChatMessage::class, 'conversationId', 'conversationId')
      ->orderBy('createdAt', 'desc');
  }
  
  public function latestMessage()
  {
    return $this->hasOne(ChatMessage::class, 'conversationId', 'conversationId')->latestOfMany('messageId');
  }
  
  public function participants()
  {
    return $this->hasMany(ConversationParticipant::class, 'conversationId', 'conversationId');
  }
  public function participantUsers()
  {
    return $this->belongsToMany(User::class, 'conversationParticipants', 'conversationId', 'userId', 'conversationId', 'userId');
  }
  
  // Scopes
  public function scopePrivate($query)
  {
    return $query->where('type', 'private');
  }
  public function scopeGroup($query)
  {
    return $query->where('type', 'group');
  }
  public function scopeForUser($query, $userId)
  {
    return $query->where(function ($q) use ($userId) {
      $q->where('user1Id', $userId)
        ->orWhere('user2Id', $userId)
        ->orWhereHas('participants', fn($p) => $p->where('userId', $userId));
    });
  }
  
  // Methods
  public function isParticipant($userId)
  {
    if ($this->type === 'private') {
      return $this->user1Id == $userId || $this->user2Id == $userId;
    }
    return $this->participants()->where('userId', $userId)->exists();
  }
  public function getOtherUser($userId)
  {
    if ($this->type !== 'private') return null;
    return $this->user1Id == $userId ? $this->user2 : $this->user1;
  }
  public function unreadCountFor($userId)
  {
    return $this->messages()
      ->where('senderId', '!=', $userId)
      ->where('isRead', false)
      ->count();
  }
  
  // Static method to create unique private conversation
  public static function findOrCreatePrivate($user1Id, $user2Id, $courseId = null)
  {
    // Ensure user1Id < user2Id to avoid duplicates
    if ($user1Id > $user2Id) {
      [$user1Id, $user2Id] = [$user2Id, $user1Id];
    }
    return static::firstOrCreate(
      ['user1Id' => $user1Id, 'user2Id' => $user2Id, 'courseId' => $courseId, 'type' => 'private'],
      ['lastMessageAt' => now()]
    );
  }
}
