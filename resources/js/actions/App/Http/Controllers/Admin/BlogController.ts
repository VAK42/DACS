import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BlogController::index
 * @see app/Http/Controllers/Admin/BlogController.php:14
 * @route '/admin/blogs'
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
* @see \App\Http\Controllers\Admin\BlogController::store
 * @see app/Http/Controllers/Admin/BlogController.php:33
 * @route '/admin/blogs'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::store
 * @see app/Http/Controllers/Admin/BlogController.php:33
 * @route '/admin/blogs'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::store
 * @see app/Http/Controllers/Admin/BlogController.php:33
 * @route '/admin/blogs'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::store
 * @see app/Http/Controllers/Admin/BlogController.php:33
 * @route '/admin/blogs'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::store
 * @see app/Http/Controllers/Admin/BlogController.php:33
 * @route '/admin/blogs'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\BlogController::update
 * @see app/Http/Controllers/Admin/BlogController.php:62
 * @route '/admin/blogs/{blogId}'
 */
export const update = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/blogs/{blogId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::update
 * @see app/Http/Controllers/Admin/BlogController.php:62
 * @route '/admin/blogs/{blogId}'
 */
update.url = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    blogId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blogId: args.blogId,
                }

    return update.definition.url
            .replace('{blogId}', parsedArgs.blogId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::update
 * @see app/Http/Controllers/Admin/BlogController.php:62
 * @route '/admin/blogs/{blogId}'
 */
update.put = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::update
 * @see app/Http/Controllers/Admin/BlogController.php:62
 * @route '/admin/blogs/{blogId}'
 */
    const updateForm = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::update
 * @see app/Http/Controllers/Admin/BlogController.php:62
 * @route '/admin/blogs/{blogId}'
 */
        updateForm.put = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\BlogController::destroy
 * @see app/Http/Controllers/Admin/BlogController.php:97
 * @route '/admin/blogs/{blogId}'
 */
export const destroy = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/blogs/{blogId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
 * @see app/Http/Controllers/Admin/BlogController.php:97
 * @route '/admin/blogs/{blogId}'
 */
destroy.url = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blogId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    blogId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blogId: args.blogId,
                }

    return destroy.definition.url
            .replace('{blogId}', parsedArgs.blogId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::destroy
 * @see app/Http/Controllers/Admin/BlogController.php:97
 * @route '/admin/blogs/{blogId}'
 */
destroy.delete = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::destroy
 * @see app/Http/Controllers/Admin/BlogController.php:97
 * @route '/admin/blogs/{blogId}'
 */
    const destroyForm = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::destroy
 * @see app/Http/Controllers/Admin/BlogController.php:97
 * @route '/admin/blogs/{blogId}'
 */
        destroyForm.delete = (args: { blogId: string | number } | [blogId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/blogs/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BlogController::exportMethod
 * @see app/Http/Controllers/Admin/BlogController.php:106
 * @route '/admin/blogs/export'
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
const BlogController = { index, store, update, destroy, exportMethod, export: exportMethod }

export default BlogController