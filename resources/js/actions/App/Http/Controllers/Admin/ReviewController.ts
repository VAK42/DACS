import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReviewController::index
 * @see app/Http/Controllers/Admin/ReviewController.php:10
 * @route '/admin/reviews'
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
* @see \App\Http\Controllers\Admin\ReviewController::store
 * @see app/Http/Controllers/Admin/ReviewController.php:33
 * @route '/admin/reviews'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ReviewController::store
 * @see app/Http/Controllers/Admin/ReviewController.php:33
 * @route '/admin/reviews'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReviewController::store
 * @see app/Http/Controllers/Admin/ReviewController.php:33
 * @route '/admin/reviews'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ReviewController::store
 * @see app/Http/Controllers/Admin/ReviewController.php:33
 * @route '/admin/reviews'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReviewController::store
 * @see app/Http/Controllers/Admin/ReviewController.php:33
 * @route '/admin/reviews'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ReviewController::destroy
 * @see app/Http/Controllers/Admin/ReviewController.php:89
 * @route '/admin/reviews/{reviewId}'
 */
export const destroy = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/reviews/{reviewId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ReviewController::destroy
 * @see app/Http/Controllers/Admin/ReviewController.php:89
 * @route '/admin/reviews/{reviewId}'
 */
destroy.url = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reviewId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    reviewId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        reviewId: args.reviewId,
                }

    return destroy.definition.url
            .replace('{reviewId}', parsedArgs.reviewId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReviewController::destroy
 * @see app/Http/Controllers/Admin/ReviewController.php:89
 * @route '/admin/reviews/{reviewId}'
 */
destroy.delete = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ReviewController::destroy
 * @see app/Http/Controllers/Admin/ReviewController.php:89
 * @route '/admin/reviews/{reviewId}'
 */
    const destroyForm = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReviewController::destroy
 * @see app/Http/Controllers/Admin/ReviewController.php:89
 * @route '/admin/reviews/{reviewId}'
 */
        destroyForm.delete = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ReviewController::update
 * @see app/Http/Controllers/Admin/ReviewController.php:60
 * @route '/admin/reviews/{reviewId}'
 */
export const update = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/reviews/{reviewId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ReviewController::update
 * @see app/Http/Controllers/Admin/ReviewController.php:60
 * @route '/admin/reviews/{reviewId}'
 */
update.url = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reviewId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    reviewId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        reviewId: args.reviewId,
                }

    return update.definition.url
            .replace('{reviewId}', parsedArgs.reviewId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReviewController::update
 * @see app/Http/Controllers/Admin/ReviewController.php:60
 * @route '/admin/reviews/{reviewId}'
 */
update.put = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ReviewController::update
 * @see app/Http/Controllers/Admin/ReviewController.php:60
 * @route '/admin/reviews/{reviewId}'
 */
    const updateForm = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReviewController::update
 * @see app/Http/Controllers/Admin/ReviewController.php:60
 * @route '/admin/reviews/{reviewId}'
 */
        updateForm.put = (args: { reviewId: string | number } | [reviewId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/reviews/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReviewController::exportMethod
 * @see app/Http/Controllers/Admin/ReviewController.php:95
 * @route '/admin/reviews/export'
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
const ReviewController = { index, store, destroy, update, exportMethod, export: exportMethod }

export default ReviewController