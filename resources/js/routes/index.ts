import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:67
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:67
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:67
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:67
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:67
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
export const forgotPassword = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgotPassword.url(options),
    method: 'get',
})

forgotPassword.definition = {
    methods: ["get","head"],
    url: '/forgotPassword',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
forgotPassword.url = (options?: RouteQueryOptions) => {
    return forgotPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
forgotPassword.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgotPassword.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
forgotPassword.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forgotPassword.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
    const forgotPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: forgotPassword.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
        forgotPasswordForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: forgotPassword.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forgotPassword
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
        forgotPasswordForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: forgotPassword.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    forgotPassword.form = forgotPasswordForm
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::sendResetLink
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:27
 * @route '/forgotPassword'
 */
export const sendResetLink = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLink.url(options),
    method: 'post',
})

sendResetLink.definition = {
    methods: ["post"],
    url: '/forgotPassword',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::sendResetLink
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:27
 * @route '/forgotPassword'
 */
sendResetLink.url = (options?: RouteQueryOptions) => {
    return sendResetLink.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::sendResetLink
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:27
 * @route '/forgotPassword'
 */
sendResetLink.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLink.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::sendResetLink
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:27
 * @route '/forgotPassword'
 */
    const sendResetLinkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendResetLink.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::sendResetLink
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:27
 * @route '/forgotPassword'
 */
        sendResetLinkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendResetLink.url(options),
            method: 'post',
        })
    
    sendResetLink.form = sendResetLinkForm
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
export const passwordReset = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: passwordReset.url(options),
    method: 'get',
})

passwordReset.definition = {
    methods: ["get","head"],
    url: '/passwordReset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
passwordReset.url = (options?: RouteQueryOptions) => {
    return passwordReset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
passwordReset.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: passwordReset.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
passwordReset.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: passwordReset.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
    const passwordResetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: passwordReset.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
        passwordResetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: passwordReset.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::passwordReset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
        passwordResetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: passwordReset.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    passwordReset.form = passwordResetForm
/**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
export const certificates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificates.url(options),
    method: 'get',
})

certificates.definition = {
    methods: ["get","head"],
    url: '/certificates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
certificates.url = (options?: RouteQueryOptions) => {
    return certificates.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
certificates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificates.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
certificates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: certificates.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
    const certificatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: certificates.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
        certificatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificates.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\CertificateController::certificates
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
        certificatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    certificates.form = certificatesForm
/**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\DashboardController::dashboard
 * @see app/Http/Controllers/Learner/DashboardController.php:11
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
notifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
notifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
    const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notifications.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
        notificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\NotificationController::notifications
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
        notificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notifications.form = notificationsForm
/**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
    const settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settings.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
        settingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\SettingsController::settings
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
        settingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    settings.form = settingsForm
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
export const supportTickets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: supportTickets.url(options),
    method: 'get',
})

supportTickets.definition = {
    methods: ["get","head"],
    url: '/supportTickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
supportTickets.url = (options?: RouteQueryOptions) => {
    return supportTickets.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
supportTickets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: supportTickets.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
supportTickets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: supportTickets.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
    const supportTicketsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: supportTickets.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
        supportTicketsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: supportTickets.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::supportTickets
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
        supportTicketsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: supportTickets.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    supportTickets.form = supportTicketsForm
/**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
export const wishlist = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wishlist.url(options),
    method: 'get',
})

wishlist.definition = {
    methods: ["get","head"],
    url: '/wishlist',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
wishlist.url = (options?: RouteQueryOptions) => {
    return wishlist.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
wishlist.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wishlist.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
wishlist.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wishlist.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
    const wishlistForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: wishlist.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
        wishlistForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: wishlist.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\WishlistController::wishlist
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
        wishlistForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: wishlist.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    wishlist.form = wishlistForm
/**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
export const chat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chat.url(options),
    method: 'get',
})

chat.definition = {
    methods: ["get","head"],
    url: '/chat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
chat.url = (options?: RouteQueryOptions) => {
    return chat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
chat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chat.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
chat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chat.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
    const chatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: chat.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
        chatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chat.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ChatController::chat
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
        chatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chat.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    chat.form = chatForm