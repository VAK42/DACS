import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
export const showLinkRequestForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkRequestForm.url(options),
    method: 'get',
})

showLinkRequestForm.definition = {
    methods: ["get","head"],
    url: '/forgotPassword',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
showLinkRequestForm.url = (options?: RouteQueryOptions) => {
    return showLinkRequestForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
showLinkRequestForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkRequestForm.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
showLinkRequestForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLinkRequestForm.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
    const showLinkRequestFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showLinkRequestForm.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
        showLinkRequestFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLinkRequestForm.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showLinkRequestForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
 * @route '/forgotPassword'
 */
        showLinkRequestFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLinkRequestForm.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showLinkRequestForm.form = showLinkRequestFormForm
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
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
export const showResetForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(options),
    method: 'get',
})

showResetForm.definition = {
    methods: ["get","head"],
    url: '/passwordReset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
showResetForm.url = (options?: RouteQueryOptions) => {
    return showResetForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
showResetForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
showResetForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showResetForm.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
    const showResetFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showResetForm.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
        showResetFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showResetForm.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::showResetForm
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:19
 * @route '/passwordReset'
 */
        showResetFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showResetForm.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showResetForm.form = showResetFormForm
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::reset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:43
 * @route '/passwordReset'
 */
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/passwordReset',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::reset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:43
 * @route '/passwordReset'
 */
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::reset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:43
 * @route '/passwordReset'
 */
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::reset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:43
 * @route '/passwordReset'
 */
    const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::reset
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:43
 * @route '/passwordReset'
 */
        resetForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(options),
            method: 'post',
        })
    
    reset.form = resetForm
const ForgotPasswordController = { showLinkRequestForm, sendResetLink, showResetForm, reset }

export default ForgotPasswordController