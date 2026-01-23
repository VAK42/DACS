import EarningsController from './EarningsController'
import CourseManagementController from './CourseManagementController'
import AssessmentController from './AssessmentController'
import QuizController from './QuizController'
import LessonContentController from './LessonContentController'
import GradingController from './GradingController'
import BlogController from './BlogController'
import DashboardController from './DashboardController'
import StudentController from './StudentController'
const Instructor = {
    EarningsController: Object.assign(EarningsController, EarningsController),
CourseManagementController: Object.assign(CourseManagementController, CourseManagementController),
AssessmentController: Object.assign(AssessmentController, AssessmentController),
QuizController: Object.assign(QuizController, QuizController),
LessonContentController: Object.assign(LessonContentController, LessonContentController),
GradingController: Object.assign(GradingController, GradingController),
BlogController: Object.assign(BlogController, BlogController),
DashboardController: Object.assign(DashboardController, DashboardController),
StudentController: Object.assign(StudentController, StudentController),
}

export default Instructor