import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::store
 * @see app/Http/Controllers/Shared/SupportTicketController.php:21
 * @route '/api/supportTickets'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/supportTickets',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::store
 * @see app/Http/Controllers/Shared/SupportTicketController.php:21
 * @route '/api/supportTickets'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::store
 * @see app/Http/Controllers/Shared/SupportTicketController.php:21
 * @route '/api/supportTickets'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\SupportTicketController::store
 * @see app/Http/Controllers/Shared/SupportTicketController.php:21
 * @route '/api/supportTickets'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::store
 * @see app/Http/Controllers/Shared/SupportTicketController.php:21
 * @route '/api/supportTickets'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::close
 * @see app/Http/Controllers/Shared/SupportTicketController.php:64
 * @route '/api/supportTickets/{ticketId}/close'
 */
export const close = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/api/supportTickets/{ticketId}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::close
 * @see app/Http/Controllers/Shared/SupportTicketController.php:64
 * @route '/api/supportTickets/{ticketId}/close'
 */
close.url = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return close.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::close
 * @see app/Http/Controllers/Shared/SupportTicketController.php:64
 * @route '/api/supportTickets/{ticketId}/close'
 */
close.post = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\SupportTicketController::close
 * @see app/Http/Controllers/Shared/SupportTicketController.php:64
 * @route '/api/supportTickets/{ticketId}/close'
 */
    const closeForm = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: close.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::close
 * @see app/Http/Controllers/Shared/SupportTicketController.php:64
 * @route '/api/supportTickets/{ticketId}/close'
 */
        closeForm.post = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: close.url(args, options),
            method: 'post',
        })
    
    close.form = closeForm
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::reply
 * @see app/Http/Controllers/Shared/SupportTicketController.php:48
 * @route '/api/supportTickets/{ticketId}/reply'
 */
export const reply = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

reply.definition = {
    methods: ["post"],
    url: '/api/supportTickets/{ticketId}/reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::reply
 * @see app/Http/Controllers/Shared/SupportTicketController.php:48
 * @route '/api/supportTickets/{ticketId}/reply'
 */
reply.url = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reply.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::reply
 * @see app/Http/Controllers/Shared/SupportTicketController.php:48
 * @route '/api/supportTickets/{ticketId}/reply'
 */
reply.post = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\SupportTicketController::reply
 * @see app/Http/Controllers/Shared/SupportTicketController.php:48
 * @route '/api/supportTickets/{ticketId}/reply'
 */
    const replyForm = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reply.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::reply
 * @see app/Http/Controllers/Shared/SupportTicketController.php:48
 * @route '/api/supportTickets/{ticketId}/reply'
 */
        replyForm.post = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reply.url(args, options),
            method: 'post',
        })
    
    reply.form = replyForm
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/supportTickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::index
 * @see app/Http/Controllers/Shared/SupportTicketController.php:10
 * @route '/supportTickets'
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
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
export const show = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/supportTickets/{ticketId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
show.url = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{ticketId}', parsedArgs.ticketId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
show.get = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
show.head = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
    const showForm = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
        showForm.get = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\SupportTicketController::show
 * @see app/Http/Controllers/Shared/SupportTicketController.php:37
 * @route '/supportTickets/{ticketId}'
 */
        showForm.head = (args: { ticketId: string | number } | [ticketId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const SupportTicketController = { store, close, reply, index, show }

export default SupportTicketController