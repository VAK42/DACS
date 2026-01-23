import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/enrollments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::index
 * @see app/Http/Controllers/Admin/EnrollmentController.php:11
 * @route '/admin/enrollments'
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
* @see \App\Http\Controllers\Admin\EnrollmentController::store
 * @see app/Http/Controllers/Admin/EnrollmentController.php:42
 * @route '/admin/enrollments'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/enrollments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::store
 * @see app/Http/Controllers/Admin/EnrollmentController.php:42
 * @route '/admin/enrollments'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::store
 * @see app/Http/Controllers/Admin/EnrollmentController.php:42
 * @route '/admin/enrollments'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\EnrollmentController::store
 * @see app/Http/Controllers/Admin/EnrollmentController.php:42
 * @route '/admin/enrollments'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::store
 * @see app/Http/Controllers/Admin/EnrollmentController.php:42
 * @route '/admin/enrollments'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\EnrollmentController::destroy
 * @see app/Http/Controllers/Admin/EnrollmentController.php:77
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
export const destroy = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/enrollments/{userId}/{courseId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::destroy
 * @see app/Http/Controllers/Admin/EnrollmentController.php:77
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
destroy.url = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    userId: args[0],
                    courseId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        userId: args.userId,
                                courseId: args.courseId,
                }

    return destroy.definition.url
            .replace('{userId}', parsedArgs.userId.toString())
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::destroy
 * @see app/Http/Controllers/Admin/EnrollmentController.php:77
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
destroy.delete = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\EnrollmentController::destroy
 * @see app/Http/Controllers/Admin/EnrollmentController.php:77
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
    const destroyForm = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::destroy
 * @see app/Http/Controllers/Admin/EnrollmentController.php:77
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
        destroyForm.delete = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\EnrollmentController::update
 * @see app/Http/Controllers/Admin/EnrollmentController.php:65
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
export const update = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/enrollments/{userId}/{courseId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::update
 * @see app/Http/Controllers/Admin/EnrollmentController.php:65
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
update.url = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    userId: args[0],
                    courseId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        userId: args.userId,
                                courseId: args.courseId,
                }

    return update.definition.url
            .replace('{userId}', parsedArgs.userId.toString())
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::update
 * @see app/Http/Controllers/Admin/EnrollmentController.php:65
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
update.put = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\EnrollmentController::update
 * @see app/Http/Controllers/Admin/EnrollmentController.php:65
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
    const updateForm = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::update
 * @see app/Http/Controllers/Admin/EnrollmentController.php:65
 * @route '/admin/enrollments/{userId}/{courseId}'
 */
        updateForm.put = (args: { userId: string | number, courseId: string | number } | [userId: string | number, courseId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/enrollments/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\EnrollmentController::exportMethod
 * @see app/Http/Controllers/Admin/EnrollmentController.php:82
 * @route '/admin/enrollments/export'
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
const EnrollmentController = { index, store, destroy, update, exportMethod, export: exportMethod }

export default EnrollmentController