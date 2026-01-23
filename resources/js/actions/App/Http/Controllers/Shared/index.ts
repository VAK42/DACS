import NotificationController from './NotificationController'
import SettingsController from './SettingsController'
import SupportTicketController from './SupportTicketController'
import ChatController from './ChatController'
import LanguageController from './LanguageController'
const Shared = {
    NotificationController: Object.assign(NotificationController, NotificationController),
SettingsController: Object.assign(SettingsController, SettingsController),
SupportTicketController: Object.assign(SupportTicketController, SupportTicketController),
ChatController: Object.assign(ChatController, ChatController),
LanguageController: Object.assign(LanguageController, LanguageController),
}

export default Shared