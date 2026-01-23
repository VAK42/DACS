import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/support',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::index
 * @see app/Http/Controllers/Admin/SupportTicketController.php:9
 * @route '/admin/support'
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
* @see \App\Http\Controllers\Admin\SupportTicketController::store
 * @see app/Http/Controllers/Admin/SupportTicketController.php:39
 * @route '/admin/support'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/support',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::store
 * @see app/Http/Controllers/Admin/SupportTicketController.php:39
 * @route '/admin/support'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::store
 * @see app/Http/Controllers/Admin/SupportTicketController.php:39
 * @route '/admin/support'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SupportTicketController::store
 * @see app/Http/Controllers/Admin/SupportTicketController.php:39
 * @route '/admin/support'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::store
 * @see app/Http/Controllers/Admin/SupportTicketController.php:39
 * @route '/admin/support'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\SupportTicketController::destroy
 * @see app/Http/Controllers/Admin/SupportTicketController.php:76
 * @route '/admin/support/{ticketId}'
 */
export const destroy = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/support/{ticketId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::destroy
 * @see app/Http/Controllers/Admin/SupportTicketController.php:76
 * @route '/admin/support/{ticketId}'
 */
destroy.url = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ticketId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    ticketId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        ticketId: args.ticketId,
                }

    return destroy.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::destroy
 * @see app/Http/Controllers/Admin/SupportTicketController.php:76
 * @route '/admin/support/{ticketId}'
 */
destroy.delete = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\SupportTicketController::destroy
 * @see app/Http/Controllers/Admin/SupportTicketController.php:76
 * @route '/admin/support/{ticketId}'
 */
    const destroyForm = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::destroy
 * @see app/Http/Controllers/Admin/SupportTicketController.php:76
 * @route '/admin/support/{ticketId}'
 */
        destroyForm.delete = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\SupportTicketController::update
 * @see app/Http/Controllers/Admin/SupportTicketController.php:52
 * @route '/admin/support/{ticketId}'
 */
export const update = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/support/{ticketId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::update
 * @see app/Http/Controllers/Admin/SupportTicketController.php:52
 * @route '/admin/support/{ticketId}'
 */
update.url = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ticketId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    ticketId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        ticketId: args.ticketId,
                }

    return update.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::update
 * @see app/Http/Controllers/Admin/SupportTicketController.php:52
 * @route '/admin/support/{ticketId}'
 */
update.put = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\SupportTicketController::update
 * @see app/Http/Controllers/Admin/SupportTicketController.php:52
 * @route '/admin/support/{ticketId}'
 */
    const updateForm = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::update
 * @see app/Http/Controllers/Admin/SupportTicketController.php:52
 * @route '/admin/support/{ticketId}'
 */
        updateForm.put = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/support/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SupportTicketController::exportMethod
 * @see app/Http/Controllers/Admin/SupportTicketController.php:82
 * @route '/admin/support/export'
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
const SupportTicketController = { index, store, destroy, update, exportMethod, export: exportMethod }

export default SupportTicketController