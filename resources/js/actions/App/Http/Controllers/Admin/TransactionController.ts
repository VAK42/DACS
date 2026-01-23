import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\TransactionController::index
 * @see app/Http/Controllers/Admin/TransactionController.php:9
 * @route '/admin/transactions'
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
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/transactions/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\TransactionController::exportMethod
 * @see app/Http/Controllers/Admin/TransactionController.php:45
 * @route '/admin/transactions/export'
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
const TransactionController = { index, exportMethod, export: exportMethod }

export default TransactionController