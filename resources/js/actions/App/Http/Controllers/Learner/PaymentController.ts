import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\PaymentController::create
 * @see app/Http/Controllers/Learner/PaymentController.php:14
 * @route '/api/payment/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/api/payment/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\PaymentController::create
 * @see app/Http/Controllers/Learner/PaymentController.php:14
 * @route '/api/payment/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\PaymentController::create
 * @see app/Http/Controllers/Learner/PaymentController.php:14
 * @route '/api/payment/create'
 */
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\PaymentController::create
 * @see app/Http/Controllers/Learner/PaymentController.php:14
 * @route '/api/payment/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\PaymentController::create
 * @see app/Http/Controllers/Learner/PaymentController.php:14
 * @route '/api/payment/create'
 */
        createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(options),
            method: 'post',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Learner\PaymentController::confirmPayment
 * @see app/Http/Controllers/Learner/PaymentController.php:82
 * @route '/admin/transactions/{transactionId}/confirm'
 */
export const confirmPayment = (args: { transactionId: string | number } | [transactionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirmPayment.url(args, options),
    method: 'post',
})

confirmPayment.definition = {
    methods: ["post"],
    url: '/admin/transactions/{transactionId}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\PaymentController::confirmPayment
 * @see app/Http/Controllers/Learner/PaymentController.php:82
 * @route '/admin/transactions/{transactionId}/confirm'
 */
confirmPayment.url = (args: { transactionId: string | number } | [transactionId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transactionId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    transactionId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transactionId: args.transactionId,
                }

    return confirmPayment.definition.url
            .replace('{transactionId}', parsedArgs.transactionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\PaymentController::confirmPayment
 * @see app/Http/Controllers/Learner/PaymentController.php:82
 * @route '/admin/transactions/{transactionId}/confirm'
 */
confirmPayment.post = (args: { transactionId: string | number } | [transactionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirmPayment.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\PaymentController::confirmPayment
 * @see app/Http/Controllers/Learner/PaymentController.php:82
 * @route '/admin/transactions/{transactionId}/confirm'
 */
    const confirmPaymentForm = (args: { transactionId: string | number } | [transactionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: confirmPayment.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\PaymentController::confirmPayment
 * @see app/Http/Controllers/Learner/PaymentController.php:82
 * @route '/admin/transactions/{transactionId}/confirm'
 */
        confirmPaymentForm.post = (args: { transactionId: string | number } | [transactionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: confirmPayment.url(args, options),
            method: 'post',
        })
    
    confirmPayment.form = confirmPaymentForm
const PaymentController = { create, confirmPayment }

export default PaymentController