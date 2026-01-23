<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use App\Models\Enrollment;
use App\Models\Conversation;
class ChatAccessMiddleware
{
  public function handle(Request $request, Closure $next)
  {
    $user = $request->user();
    if (!$user) {
      return response()->json(['error' => 'Unauthorized'], 401);
    }
    // Instructors have full access
    if ($user->isInstructor() || $user->isAdmin()) {
      return $next($request);
    }
    // For learners, check if they have at least one paid enrollment
    $hasPaidEnrollment = Enrollment::where('userId', $user->userId)
      ->where('isPaid', true)
      ->exists();
    if (!$hasPaidEnrollment) {
      return response()->json(['error' => 'You need to have at least one paid enrollment to access chat'], 403);
    }
    return $next($request);
  }
}
