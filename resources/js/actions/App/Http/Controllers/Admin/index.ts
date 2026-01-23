import CategoryController from './CategoryController'
import BlogController from './BlogController'
import CertificateController from './CertificateController'
import CourseController from './CourseController'
import AnalyticsController from './AnalyticsController'
import DiscussionController from './DiscussionController'
import EnrollmentController from './EnrollmentController'
import NotificationController from './NotificationController'
import PayoutController from './PayoutController'
import ReviewController from './ReviewController'
import SupportTicketController from './SupportTicketController'
import TransactionController from './TransactionController'
import SettingsController from './SettingsController'
import UserController from './UserController'
const Admin = {
    CategoryController: Object.assign(CategoryController, CategoryController),
BlogController: Object.assign(BlogController, BlogController),
CertificateController: Object.assign(CertificateController, CertificateController),
CourseController: Object.assign(CourseController, CourseController),
AnalyticsController: Object.assign(AnalyticsController, AnalyticsController),
DiscussionController: Object.assign(DiscussionController, DiscussionController),
EnrollmentController: Object.assign(EnrollmentController, EnrollmentController),
NotificationController: Object.assign(NotificationController, NotificationController),
PayoutController: Object.assign(PayoutController, PayoutController),
ReviewController: Object.assign(ReviewController, ReviewController),
SupportTicketController: Object.assign(SupportTicketController, SupportTicketController),
TransactionController: Object.assign(TransactionController, TransactionController),
SettingsController: Object.assign(SettingsController, SettingsController),
UserController: Object.assign(UserController, UserController),
}

export default Admin