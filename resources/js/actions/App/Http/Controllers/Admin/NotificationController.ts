import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\NotificationController::index
 * @see app/Http/Controllers/Admin/NotificationController.php:10
 * @route '/admin/notifications'
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
/**
* @see \App\Http\Controllers\Admin\NotificationController::store
 * @see app/Http/Controllers/Admin/NotificationController.php:37
 * @route '/admin/notifications'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/notifications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\NotificationController::store
 * @see app/Http/Controllers/Admin/NotificationController.php:37
 * @route '/admin/notifications'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NotificationController::store
 * @see app/Http/Controllers/Admin/NotificationController.php:37
 * @route '/admin/notifications'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\NotificationController::store
 * @see app/Http/Controllers/Admin/NotificationController.php:37
 * @route '/admin/notifications'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\NotificationController::store
 * @see app/Http/Controllers/Admin/NotificationController.php:37
 * @route '/admin/notifications'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\NotificationController::destroy
 * @see app/Http/Controllers/Admin/NotificationController.php:83
 * @route '/admin/notifications/{notificationId}'
 */
export const destroy = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/notifications/{notificationId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\NotificationController::destroy
 * @see app/Http/Controllers/Admin/NotificationController.php:83
 * @route '/admin/notifications/{notificationId}'
 */
destroy.url = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notificationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notificationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notificationId: args.notificationId,
                }

    return destroy.definition.url
            .replace('{notificationId}', parsedArgs.notificationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NotificationController::destroy
 * @see app/Http/Controllers/Admin/NotificationController.php:83
 * @route '/admin/notifications/{notificationId}'
 */
destroy.delete = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\NotificationController::destroy
 * @see app/Http/Controllers/Admin/NotificationController.php:83
 * @route '/admin/notifications/{notificationId}'
 */
    const destroyForm = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\NotificationController::destroy
 * @see app/Http/Controllers/Admin/NotificationController.php:83
 * @route '/admin/notifications/{notificationId}'
 */
        destroyForm.delete = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\NotificationController::update
 * @see app/Http/Controllers/Admin/NotificationController.php:66
 * @route '/admin/notifications/{notificationId}'
 */
export const update = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/notifications/{notificationId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\NotificationController::update
 * @see app/Http/Controllers/Admin/NotificationController.php:66
 * @route '/admin/notifications/{notificationId}'
 */
update.url = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notificationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notificationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notificationId: args.notificationId,
                }

    return update.definition.url
            .replace('{notificationId}', parsedArgs.notificationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NotificationController::update
 * @see app/Http/Controllers/Admin/NotificationController.php:66
 * @route '/admin/notifications/{notificationId}'
 */
update.put = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\NotificationController::update
 * @see app/Http/Controllers/Admin/NotificationController.php:66
 * @route '/admin/notifications/{notificationId}'
 */
    const updateForm = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\NotificationController::update
 * @see app/Http/Controllers/Admin/NotificationController.php:66
 * @route '/admin/notifications/{notificationId}'
 */
        updateForm.put = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/notifications/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\NotificationController::exportMethod
 * @see app/Http/Controllers/Admin/NotificationController.php:89
 * @route '/admin/notifications/export'
 */
        exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const NotificationController = { index, store, destroy, update, exportMethod, export: exportMethod }

export default NotificationController