import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\TwoFactorController::confirm
 * @see app/Http/Controllers/Auth/TwoFactorController.php:52
 * @route '/user/confirmedTwoFactorAuthentication'
 */
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/user/confirmedTwoFactorAuthentication',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\TwoFactorController::confirm
 * @see app/Http/Controllers/Auth/TwoFactorController.php:52
 * @route '/user/confirmedTwoFactorAuthentication'
 */
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorController::confirm
 * @see app/Http/Controllers/Auth/TwoFactorController.php:52
 * @route '/user/confirmedTwoFactorAuthentication'
 */
confirm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\TwoFactorController::confirm
 * @see app/Http/Controllers/Auth/TwoFactorController.php:52
 * @route '/user/confirmedTwoFactorAuthentication'
 */
    const confirmForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: confirm.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\TwoFactorController::confirm
 * @see app/Http/Controllers/Auth/TwoFactorController.php:52
 * @route '/user/confirmedTwoFactorAuthentication'
 */
        confirmForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: confirm.url(options),
            method: 'post',
        })
    
    confirm.form = confirmForm
/**
* @see \App\Http\Controllers\Auth\TwoFactorController::disable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:72
 * @route '/user/twoFactorAuthentication'
 */
export const disable = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: disable.url(options),
    method: 'delete',
})

disable.definition = {
    methods: ["delete"],
    url: '/user/twoFactorAuthentication',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Auth\TwoFactorController::disable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:72
 * @route '/user/twoFactorAuthentication'
 */
disable.url = (options?: RouteQueryOptions) => {
    return disable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorController::disable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:72
 * @route '/user/twoFactorAuthentication'
 */
disable.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: disable.url(options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Auth\TwoFactorController::disable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:72
 * @route '/user/twoFactorAuthentication'
 */
    const disableForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: disable.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\TwoFactorController::disable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:72
 * @route '/user/twoFactorAuthentication'
 */
        disableForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: disable.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    disable.form = disableForm
/**
* @see \App\Http\Controllers\Auth\TwoFactorController::enable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:19
 * @route '/user/twoFactorAuthentication'
 */
export const enable = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enable.url(options),
    method: 'post',
})

enable.definition = {
    methods: ["post"],
    url: '/user/twoFactorAuthentication',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\TwoFactorController::enable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:19
 * @route '/user/twoFactorAuthentication'
 */
enable.url = (options?: RouteQueryOptions) => {
    return enable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorController::enable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:19
 * @route '/user/twoFactorAuthentication'
 */
enable.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enable.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\TwoFactorController::enable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:19
 * @route '/user/twoFactorAuthentication'
 */
    const enableForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enable.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\TwoFactorController::enable
 * @see app/Http/Controllers/Auth/TwoFactorController.php:19
 * @route '/user/twoFactorAuthentication'
 */
        enableForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enable.url(options),
            method: 'post',
        })
    
    enable.form = enableForm
const twoFactor = {
    confirm: Object.assign(confirm, confirm),
disable: Object.assign(disable, disable),
enable: Object.assign(enable, enable),
}

export default twoFactor