<?php
namespace App\Http\Controllers\Learner;
use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use Illuminate\Http\Request;
class DeadlineController extends Controller
{
   public function reset(Request $request, $courseId)
   {
      $user = $request->user();
      $enrollment = Enrollment::where('userId', $user->userId)
         ->where('courseId', $courseId)
         ->where('isPaid', true)
         ->firstOrFail();
      $enrollment->resetDeadlines();
      return response()->json([
         'message' => 'Deadlines Reset Successfully!',
         'personalDeadline' => $enrollment->personalDeadline,
         'deadlineStatus' => $enrollment->getDeadlineStatus(),
      ]);
   }
}
