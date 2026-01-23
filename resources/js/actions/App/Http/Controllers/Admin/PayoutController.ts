import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/payouts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PayoutController::index
 * @see app/Http/Controllers/Admin/PayoutController.php:12
 * @route '/admin/payouts'
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
* @see \App\Http\Controllers\Admin\PayoutController::create
 * @see app/Http/Controllers/Admin/PayoutController.php:63
 * @route '/admin/payouts'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/admin/payouts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PayoutController::create
 * @see app/Http/Controllers/Admin/PayoutController.php:63
 * @route '/admin/payouts'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PayoutController::create
 * @see app/Http/Controllers/Admin/PayoutController.php:63
 * @route '/admin/payouts'
 */
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PayoutController::create
 * @see app/Http/Controllers/Admin/PayoutController.php:63
 * @route '/admin/payouts'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PayoutController::create
 * @see app/Http/Controllers/Admin/PayoutController.php:63
 * @route '/admin/payouts'
 */
        createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(options),
            method: 'post',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\PayoutController::cancel
 * @see app/Http/Controllers/Admin/PayoutController.php:117
 * @route '/admin/payouts/{payoutId}/cancel'
 */
export const cancel = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/admin/payouts/{payoutId}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PayoutController::cancel
 * @see app/Http/Controllers/Admin/PayoutController.php:117
 * @route '/admin/payouts/{payoutId}/cancel'
 */
cancel.url = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payoutId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    payoutId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        payoutId: args.payoutId,
                }

    return cancel.definition.url
            .replace('{payoutId}', parsedArgs.payoutId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PayoutController::cancel
 * @see app/Http/Controllers/Admin/PayoutController.php:117
 * @route '/admin/payouts/{payoutId}/cancel'
 */
cancel.post = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PayoutController::cancel
 * @see app/Http/Controllers/Admin/PayoutController.php:117
 * @route '/admin/payouts/{payoutId}/cancel'
 */
    const cancelForm = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PayoutController::cancel
 * @see app/Http/Controllers/Admin/PayoutController.php:117
 * @route '/admin/payouts/{payoutId}/cancel'
 */
        cancelForm.post = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(args, options),
            method: 'post',
        })
    
    cancel.form = cancelForm
/**
* @see \App\Http\Controllers\Admin\PayoutController::process
 * @see app/Http/Controllers/Admin/PayoutController.php:88
 * @route '/admin/payouts/{payoutId}/process'
 */
export const process = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(args, options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/admin/payouts/{payoutId}/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PayoutController::process
 * @see app/Http/Controllers/Admin/PayoutController.php:88
 * @route '/admin/payouts/{payoutId}/process'
 */
process.url = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payoutId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    payoutId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        payoutId: args.payoutId,
                }

    return process.definition.url
            .replace('{payoutId}', parsedArgs.payoutId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PayoutController::process
 * @see app/Http/Controllers/Admin/PayoutController.php:88
 * @route '/admin/payouts/{payoutId}/process'
 */
process.post = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PayoutController::process
 * @see app/Http/Controllers/Admin/PayoutController.php:88
 * @route '/admin/payouts/{payoutId}/process'
 */
    const processForm = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PayoutController::process
 * @see app/Http/Controllers/Admin/PayoutController.php:88
 * @route '/admin/payouts/{payoutId}/process'
 */
        processForm.post = (args: { payoutId: string | number } | [payoutId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(args, options),
            method: 'post',
        })
    
    process.form = processForm
/**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
export const instructorBalances = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructorBalances.url(options),
    method: 'get',
})

instructorBalances.definition = {
    methods: ["get","head"],
    url: '/admin/payouts/instructorBalances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
instructorBalances.url = (options?: RouteQueryOptions) => {
    return instructorBalances.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
instructorBalances.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: instructorBalances.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
instructorBalances.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: instructorBalances.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
    const instructorBalancesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: instructorBalances.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
        instructorBalancesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructorBalances.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PayoutController::instructorBalances
 * @see app/Http/Controllers/Admin/PayoutController.php:39
 * @route '/admin/payouts/instructorBalances'
 */
        instructorBalancesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: instructorBalances.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    instructorBalances.form = instructorBalancesForm
const PayoutController = { index, create, cancel, process, instructorBalances }

export default PayoutController