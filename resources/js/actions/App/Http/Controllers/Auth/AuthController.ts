import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
export const showLogin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLogin.url(options),
    method: 'get',
})

showLogin.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
showLogin.url = (options?: RouteQueryOptions) => {
    return showLogin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
showLogin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLogin.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
showLogin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLogin.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
    const showLoginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showLogin.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
        showLoginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLogin.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthController::showLogin
 * @see app/Http/Controllers/Auth/AuthController.php:12
 * @route '/login'
 */
        showLoginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLogin.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showLogin.form = showLoginForm
/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:41
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:41
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:41
 * @route '/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:41
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:41
 * @route '/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
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
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
export const showRegister = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegister.url(options),
    method: 'get',
})

showRegister.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
showRegister.url = (options?: RouteQueryOptions) => {
    return showRegister.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
showRegister.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegister.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
showRegister.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showRegister.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
    const showRegisterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showRegister.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
        showRegisterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showRegister.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthController::showRegister
 * @see app/Http/Controllers/Auth/AuthController.php:16
 * @route '/register'
 */
        showRegisterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showRegister.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showRegister.form = showRegisterForm
/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:20
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:20
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:20
 * @route '/register'
 */
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:20
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:20
 * @route '/register'
 */
        registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Auth\AuthController::verifyTwoFactor
 * @see app/Http/Controllers/Auth/AuthController.php:74
 * @route '/twoFactorChallenge'
 */
export const verifyTwoFactor = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyTwoFactor.url(options),
    method: 'post',
})

verifyTwoFactor.definition = {
    methods: ["post"],
    url: '/twoFactorChallenge',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthController::verifyTwoFactor
 * @see app/Http/Controllers/Auth/AuthController.php:74
 * @route '/twoFactorChallenge'
 */
verifyTwoFactor.url = (options?: RouteQueryOptions) => {
    return verifyTwoFactor.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthController::verifyTwoFactor
 * @see app/Http/Controllers/Auth/AuthController.php:74
 * @route '/twoFactorChallenge'
 */
verifyTwoFactor.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyTwoFactor.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthController::verifyTwoFactor
 * @see app/Http/Controllers/Auth/AuthController.php:74
 * @route '/twoFactorChallenge'
 */
    const verifyTwoFactorForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verifyTwoFactor.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthController::verifyTwoFactor
 * @see app/Http/Controllers/Auth/AuthController.php:74
 * @route '/twoFactorChallenge'
 */
        verifyTwoFactorForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verifyTwoFactor.url(options),
            method: 'post',
        })
    
    verifyTwoFactor.form = verifyTwoFactorForm
const AuthController = { showLogin, login, logout, showRegister, register, verifyTwoFactor }

export default AuthController