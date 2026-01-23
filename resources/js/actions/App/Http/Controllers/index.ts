import Auth from './Auth'
import Public from './Public'
import Learner from './Learner'
import Shared from './Shared'
import Instructor from './Instructor'
import Admin from './Admin'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Public: Object.assign(Public, Public),
Learner: Object.assign(Learner, Learner),
Shared: Object.assign(Shared, Shared),
Instructor: Object.assign(Instructor, Instructor),
Admin: Object.assign(Admin, Admin),
}

export default Controllers