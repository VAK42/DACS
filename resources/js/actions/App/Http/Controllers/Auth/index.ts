import AuthController from './AuthController'
import EmailVerificationController from './EmailVerificationController'
import ForgotPasswordController from './ForgotPasswordController'
import OAuthController from './OAuthController'
import TwoFactorController from './TwoFactorController'
const Auth = {
    AuthController: Object.assign(AuthController, AuthController),
EmailVerificationController: Object.assign(EmailVerificationController, EmailVerificationController),
ForgotPasswordController: Object.assign(ForgotPasswordController, ForgotPasswordController),
OAuthController: Object.assign(OAuthController, OAuthController),
TwoFactorController: Object.assign(TwoFactorController, TwoFactorController),
}

export default Auth