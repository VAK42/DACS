import DiscussionController from './DiscussionController'
import ReviewController from './ReviewController'
import LessonController from './LessonController'
import PaymentController from './PaymentController'
import QuizController from './QuizController'
import AssessmentController from './AssessmentController'
import WishlistController from './WishlistController'
import CertificateController from './CertificateController'
import CourseController from './CourseController'
import DashboardController from './DashboardController'
const Learner = {
    DiscussionController: Object.assign(DiscussionController, DiscussionController),
ReviewController: Object.assign(ReviewController, ReviewController),
LessonController: Object.assign(LessonController, LessonController),
PaymentController: Object.assign(PaymentController, PaymentController),
QuizController: Object.assign(QuizController, QuizController),
AssessmentController: Object.assign(AssessmentController, AssessmentController),
WishlistController: Object.assign(WishlistController, WishlistController),
CertificateController: Object.assign(CertificateController, CertificateController),
CourseController: Object.assign(CourseController, CourseController),
DashboardController: Object.assign(DashboardController, DashboardController),
}

export default Learner