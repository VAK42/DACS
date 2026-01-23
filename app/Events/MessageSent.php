<?php
namespace App\Events;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\ChatMessage;
class MessageSent implements ShouldBroadcastNow
{
  use Dispatchable, InteractsWithSockets, SerializesModels;
  public ChatMessage $message;
  public function __construct(ChatMessage $message)
{
    $this->message = $message->load('sender:userId,userName'); 
}
  public function broadcastOn(): array
  {
    return [
      new PrivateChannel('conversation.' . $this->message->conversationId),
    ];
  }
  public function broadcastAs(): string
  {
    return 'message.sent';
  }
  public function broadcastWith(): array
  {
    return [
      'messageId' => $this->message->messageId,
      'conversationId' => $this->message->conversationId,
      'senderId' => $this->message->senderId,
      'senderName' => $this->message->sender->userName,
      'type' => $this->message->type,
      'content' => $this->message->content,
      'filePath' => $this->message->filePath,
      'fileName' => $this->message->fileName,
      'createdAt' => $this->message->createdAt->toISOString(),
    ];
  }
}
