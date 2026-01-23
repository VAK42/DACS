<?php
namespace App\Events;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
class MessagesRead implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;
  public int $conversationId;
  public int $readerId;
  public function __construct(int $conversationId, int $readerId)
  {
    $this->conversationId = $conversationId;
    $this->readerId = $readerId;
  }
  public function broadcastOn(): array
  {
    return [
      new PrivateChannel('conversation.' . $this->conversationId),
    ];
  }
  public function broadcastAs(): string
  {
    return 'messages.read';
  }
  public function broadcastWith(): array
  {
    return [
      'conversationId' => $this->conversationId,
      'readerId' => $this->readerId,
      'readAt' => now()->toISOString(),
    ];
  }
}
