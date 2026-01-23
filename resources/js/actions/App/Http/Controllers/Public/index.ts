import HomeController from './HomeController'
import BlogController from './BlogController'
import CourseController from './CourseController'
const Public = {
    HomeController: Object.assign(HomeController, HomeController),
BlogController: Object.assign(BlogController, BlogController),
CourseController: Object.assign(CourseController, CourseController),
}

export default Public