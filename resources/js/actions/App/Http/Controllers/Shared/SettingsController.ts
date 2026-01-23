import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Shared\SettingsController::updatePassword
 * @see app/Http/Controllers/Shared/SettingsController.php:36
 * @route '/api/settings/password'
 */
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

updatePassword.definition = {
    methods: ["put"],
    url: '/api/settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Shared\SettingsController::updatePassword
 * @see app/Http/Controllers/Shared/SettingsController.php:36
 * @route '/api/settings/password'
 */
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SettingsController::updatePassword
 * @see app/Http/Controllers/Shared/SettingsController.php:36
 * @route '/api/settings/password'
 */
updatePassword.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Shared\SettingsController::updatePassword
 * @see app/Http/Controllers/Shared/SettingsController.php:36
 * @route '/api/settings/password'
 */
    const updatePasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatePassword.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\SettingsController::updatePassword
 * @see app/Http/Controllers/Shared/SettingsController.php:36
 * @route '/api/settings/password'
 */
        updatePasswordForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatePassword.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatePassword.form = updatePasswordForm
/**
* @see \App\Http\Controllers\Shared\SettingsController::updateProfile
 * @see app/Http/Controllers/Shared/SettingsController.php:24
 * @route '/api/settings/profile'
 */
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(options),
    method: 'put',
})

updateProfile.definition = {
    methods: ["put"],
    url: '/api/settings/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Shared\SettingsController::updateProfile
 * @see app/Http/Controllers/Shared/SettingsController.php:24
 * @route '/api/settings/profile'
 */
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SettingsController::updateProfile
 * @see app/Http/Controllers/Shared/SettingsController.php:24
 * @route '/api/settings/profile'
 */
updateProfile.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Shared\SettingsController::updateProfile
 * @see app/Http/Controllers/Shared/SettingsController.php:24
 * @route '/api/settings/profile'
 */
    const updateProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateProfile.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\SettingsController::updateProfile
 * @see app/Http/Controllers/Shared/SettingsController.php:24
 * @route '/api/settings/profile'
 */
        updateProfileForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateProfile.form = updateProfileForm
/**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\SettingsController::index
 * @see app/Http/Controllers/Shared/SettingsController.php:10
 * @route '/settings'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const SettingsController = { updatePassword, updateProfile, index }

export default SettingsController