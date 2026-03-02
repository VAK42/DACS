<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Enrollment extends Model
{
  use HasFactory;
  protected $table = 'enrollments';
  protected $primaryKey = null;
  public $incrementing = false;
  protected $keyType = 'string';
  const CREATED_AT = 'createdAt';
  const UPDATED_AT = 'updatedAt';
  protected $fillable = [
    'userId',
    'courseId',
    'enrollmentDate',
    'isPaid',
    'completionPercent',
    'completedAt',
    'personalDeadline',
  ];
  protected function casts(): array
  {
    return [
      'enrollmentDate' => 'datetime',
      'completedAt' => 'datetime',
      'isPaid' => 'boolean',
      'completionPercent' => 'decimal:2',
      'personalDeadline' => 'array',
    ];
  }
  public function user()
  {
    return $this->belongsTo(User::class, 'userId', 'userId');
  }
  public function course()
  {
    return $this->belongsTo(Course::class, 'courseId', 'courseId');
  }
  /**
   * Generate personalized deadline based on course modules.
   * Each module gets 7 days from enrollment date.
   */
  public function generatePersonalDeadline($modules = null)
  {
    if (!$modules) {
      $course = $this->course()->with('modules')->first();
      $modules = $course ? $course->modules : collect();
    }
    $startDate = $this->enrollmentDate ?? Carbon::now();
    $daysPerModule = 7;
    $moduleDeadlines = [];
    $weekIndex = 1;
    foreach ($modules as $module) {
      $moduleDeadlines[] = [
        'moduleId' => $module->moduleId,
        'moduleTitle' => $module->moduleTitle,
        'deadline' => Carbon::parse($startDate)->addDays($daysPerModule * $weekIndex)->toIso8601String(),
        'week' => $weekIndex,
      ];
      $weekIndex++;
    }
    $courseDeadline = count($moduleDeadlines) > 0
      ? end($moduleDeadlines)['deadline']
      : Carbon::parse($startDate)->addDays($daysPerModule)->toIso8601String();
    $this->personalDeadline = [
      'courseDeadline' => $courseDeadline,
      'moduleDeadlines' => $moduleDeadlines,
      'daysPerModule' => $daysPerModule,
      'lastResetAt' => Carbon::now()->toIso8601String(),
    ];
    $this->save();
    return $this;
  }
  /**
   * Reset all deadlines from current date.
   */
  public function resetDeadlines()
  {
    $course = $this->course()->with('modules')->first();
    $modules = $course ? $course->modules : collect();
    $startDate = Carbon::now();
    $daysPerModule = $this->personalDeadline['daysPerModule'] ?? 7;
    $moduleDeadlines = [];
    $weekIndex = 1;
    foreach ($modules as $module) {
      $moduleDeadlines[] = [
        'moduleId' => $module->moduleId,
        'moduleTitle' => $module->moduleTitle,
        'deadline' => Carbon::parse($startDate)->addDays($daysPerModule * $weekIndex)->toIso8601String(),
        'week' => $weekIndex,
      ];
      $weekIndex++;
    }
    $courseDeadline = count($moduleDeadlines) > 0
      ? end($moduleDeadlines)['deadline']
      : Carbon::parse($startDate)->addDays($daysPerModule)->toIso8601String();
    $this->personalDeadline = [
      'courseDeadline' => $courseDeadline,
      'moduleDeadlines' => $moduleDeadlines,
      'daysPerModule' => $daysPerModule,
      'lastResetAt' => Carbon::now()->toIso8601String(),
    ];
    $this->save();
    return $this;
  }
  /**
   * Get deadline status: onTrack, dueSoon, overdue, or none.
   */
  public function getDeadlineStatus(): string
  {
    if (!$this->personalDeadline || !isset($this->personalDeadline['courseDeadline'])) {
      return 'none';
    }
    $courseDeadline = Carbon::parse($this->personalDeadline['courseDeadline']);
    $now = Carbon::now();
    if ($now->greaterThan($courseDeadline)) {
      return 'overdue';
    }
    if ($now->diffInDays($courseDeadline, false) <= 3) {
      return 'dueSoon';
    }
    return 'onTrack';
  }
}