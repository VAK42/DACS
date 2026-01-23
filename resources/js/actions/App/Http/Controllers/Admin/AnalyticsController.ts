import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
export const getDashboardData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDashboardData.url(options),
    method: 'get',
})

getDashboardData.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
getDashboardData.url = (options?: RouteQueryOptions) => {
    return getDashboardData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
getDashboardData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDashboardData.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
getDashboardData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDashboardData.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
    const getDashboardDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getDashboardData.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
        getDashboardDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDashboardData.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AnalyticsController::getDashboardData
 * @see app/Http/Controllers/Admin/AnalyticsController.php:14
 * @route '/admin/dashboard'
 */
        getDashboardDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDashboardData.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getDashboardData.form = getDashboardDataForm
const AnalyticsController = { getDashboardData }

export default AnalyticsController