import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\EarningsController::updateBankInfo
 * @see app/Http/Controllers/Instructor/EarningsController.php:62
 * @route '/api/instructor/bankInfo'
 */
export const updateBankInfo = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateBankInfo.url(options),
    method: 'put',
})

updateBankInfo.definition = {
    methods: ["put"],
    url: '/api/instructor/bankInfo',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Instructor\EarningsController::updateBankInfo
 * @see app/Http/Controllers/Instructor/EarningsController.php:62
 * @route '/api/instructor/bankInfo'
 */
updateBankInfo.url = (options?: RouteQueryOptions) => {
    return updateBankInfo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\EarningsController::updateBankInfo
 * @see app/Http/Controllers/Instructor/EarningsController.php:62
 * @route '/api/instructor/bankInfo'
 */
updateBankInfo.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateBankInfo.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Instructor\EarningsController::updateBankInfo
 * @see app/Http/Controllers/Instructor/EarningsController.php:62
 * @route '/api/instructor/bankInfo'
 */
    const updateBankInfoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateBankInfo.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\EarningsController::updateBankInfo
 * @see app/Http/Controllers/Instructor/EarningsController.php:62
 * @route '/api/instructor/bankInfo'
 */
        updateBankInfoForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateBankInfo.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateBankInfo.form = updateBankInfoForm
/**
* @see \App\Http\Controllers\Instructor\EarningsController::uploadBankQr
 * @see app/Http/Controllers/Instructor/EarningsController.php:73
 * @route '/api/instructor/bankQr'
 */
export const uploadBankQr = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadBankQr.url(options),
    method: 'post',
})

uploadBankQr.definition = {
    methods: ["post"],
    url: '/api/instructor/bankQr',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\EarningsController::uploadBankQr
 * @see app/Http/Controllers/Instructor/EarningsController.php:73
 * @route '/api/instructor/bankQr'
 */
uploadBankQr.url = (options?: RouteQueryOptions) => {
    return uploadBankQr.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\EarningsController::uploadBankQr
 * @see app/Http/Controllers/Instructor/EarningsController.php:73
 * @route '/api/instructor/bankQr'
 */
uploadBankQr.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadBankQr.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\EarningsController::uploadBankQr
 * @see app/Http/Controllers/Instructor/EarningsController.php:73
 * @route '/api/instructor/bankQr'
 */
    const uploadBankQrForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadBankQr.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\EarningsController::uploadBankQr
 * @see app/Http/Controllers/Instructor/EarningsController.php:73
 * @route '/api/instructor/bankQr'
 */
        uploadBankQrForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadBankQr.url(options),
            method: 'post',
        })
    
    uploadBankQr.form = uploadBankQrForm
/**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/api/instructor/earnings/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
    const historyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: history.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
        historyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: history.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\EarningsController::history
 * @see app/Http/Controllers/Instructor/EarningsController.php:49
 * @route '/api/instructor/earnings/history'
 */
        historyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: history.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    history.form = historyForm
/**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/instructor/earnings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\EarningsController::dashboard
 * @see app/Http/Controllers/Instructor/EarningsController.php:11
 * @route '/instructor/earnings'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const EarningsController = { updateBankInfo, uploadBankQr, history, dashboard }

export default EarningsController