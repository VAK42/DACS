<?php
namespace App\Http\Controllers\Instructor;
use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use Inertia\Inertia;
class StudentController extends Controller
{
  public function index()
  {
    $enrollments = Enrollment::with(['user', 'course'])
      ->whereHas('course', function ($q) {
        $q->where('instructorId', auth()->id());
      })
      ->paginate(50);
    $enrollments->getCollection()->transform(function ($enrollment) {
      $enrollment->deadlineStatus = $enrollment->getDeadlineStatus();
      return $enrollment;
    });
    return Inertia::render('Instructor/Students', ['enrollments' => $enrollments, 'user' => auth()->user()]);
  }
}
