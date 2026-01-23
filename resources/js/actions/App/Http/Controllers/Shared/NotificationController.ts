import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Shared\NotificationController::destroy
 * @see app/Http/Controllers/Shared/NotificationController.php:42
 * @route '/api/notifications/{notificationId}'
 */
export const destroy = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/notifications/{notificationId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Shared\NotificationController::destroy
 * @see app/Http/Controllers/Shared/NotificationController.php:42
 * @route '/api/notifications/{notificationId}'
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
* @see \App\Http\Controllers\Shared\NotificationController::destroy
 * @see app/Http/Controllers/Shared/NotificationController.php:42
 * @route '/api/notifications/{notificationId}'
 */
destroy.delete = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Shared\NotificationController::destroy
 * @see app/Http/Controllers/Shared/NotificationController.php:42
 * @route '/api/notifications/{notificationId}'
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
* @see \App\Http\Controllers\Shared\NotificationController::destroy
 * @see app/Http/Controllers/Shared/NotificationController.php:42
 * @route '/api/notifications/{notificationId}'
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
* @see \App\Http\Controllers\Shared\NotificationController::markAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:27
 * @route '/api/notifications/{notificationId}/read'
 */
export const markAsRead = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

markAsRead.definition = {
    methods: ["post"],
    url: '/api/notifications/{notificationId}/read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\NotificationController::markAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:27
 * @route '/api/notifications/{notificationId}/read'
 */
markAsRead.url = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return markAsRead.definition.url
            .replace('{notificationId}', parsedArgs.notificationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\NotificationController::markAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:27
 * @route '/api/notifications/{notificationId}/read'
 */
markAsRead.post = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\NotificationController::markAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:27
 * @route '/api/notifications/{notificationId}/read'
 */
    const markAsReadForm = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAsRead.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\NotificationController::markAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:27
 * @route '/api/notifications/{notificationId}/read'
 */
        markAsReadForm.post = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAsRead.url(args, options),
            method: 'post',
        })
    
    markAsRead.form = markAsReadForm
/**
* @see \App\Http\Controllers\Shared\NotificationController::markAllAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:35
 * @route '/api/notifications/readAll'
 */
export const markAllAsRead = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(options),
    method: 'post',
})

markAllAsRead.definition = {
    methods: ["post"],
    url: '/api/notifications/readAll',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\NotificationController::markAllAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:35
 * @route '/api/notifications/readAll'
 */
markAllAsRead.url = (options?: RouteQueryOptions) => {
    return markAllAsRead.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\NotificationController::markAllAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:35
 * @route '/api/notifications/readAll'
 */
markAllAsRead.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\NotificationController::markAllAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:35
 * @route '/api/notifications/readAll'
 */
    const markAllAsReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAllAsRead.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\NotificationController::markAllAsRead
 * @see app/Http/Controllers/Shared/NotificationController.php:35
 * @route '/api/notifications/readAll'
 */
        markAllAsReadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAllAsRead.url(options),
            method: 'post',
        })
    
    markAllAsRead.form = markAllAsReadForm
/**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
export const unreadCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unreadCount.url(options),
    method: 'get',
})

unreadCount.definition = {
    methods: ["get","head"],
    url: '/api/notifications/unreadCount',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
unreadCount.url = (options?: RouteQueryOptions) => {
    return unreadCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
unreadCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unreadCount.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
unreadCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unreadCount.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
    const unreadCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unreadCount.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
        unreadCountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unreadCount.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\NotificationController::unreadCount
 * @see app/Http/Controllers/Shared/NotificationController.php:9
 * @route '/api/notifications/unreadCount'
 */
        unreadCountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unreadCount.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unreadCount.form = unreadCountForm
/**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\NotificationController::index
 * @see app/Http/Controllers/Shared/NotificationController.php:17
 * @route '/notifications'
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
const NotificationController = { destroy, markAsRead, markAllAsRead, unreadCount, index }

export default NotificationController