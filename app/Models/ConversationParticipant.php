<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class ConversationParticipant extends Model
{
  protected $table = 'conversationParticipants';
  public $timestamps = false;
  protected $fillable = [
    'conversationId',
    'userId',
    'joinedAt',
  ];
  protected $casts = [
    'joinedAt' => 'datetime',
  ];
  
  public function conversation()
  {
    return $this->belongsTo(Conversation::class, 'conversationId', 'conversationId');
  }
  public function user()
  {
    return $this->belongsTo(User::class, 'userId', 'userId');
  }
}
