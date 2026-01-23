<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class ChatMessage extends Model
{
  protected $table = 'chatMessages';
  protected $primaryKey = 'messageId';
  const CREATED_AT = 'createdAt';
  const UPDATED_AT = 'updatedAt';
  protected $fillable = [
    'conversationId',
    'senderId',
    'type',
    'content',
    'filePath',
    'fileName',
    'isRead',
    'readAt',
  ];
  protected $casts = [
    'isRead' => 'boolean',
    'readAt' => 'datetime',
  ];
  
  public function conversation()
  {
    return $this->belongsTo(Conversation::class, 'conversationId', 'conversationId');
  }
  public function sender()
  {
    return $this->belongsTo(User::class, 'senderId', 'userId');
  }
  
  public function markAsRead()
  {
    if (!$this->isRead) {
      $this->update(['isRead' => true, 'readAt' => now()]);
    }
  }
}
