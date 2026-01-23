import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\BlogController::index
 * @see app/Http/Controllers/Public/BlogController.php:9
 * @route '/blogs'
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
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/instructor/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\BlogController::index
 * @see app/Http/Controllers/Instructor/BlogController.php:12
 * @route '/instructor/blogs'
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
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/blogs/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
show.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
    const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
        showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Public\BlogController::show
 * @see app/Http/Controllers/Public/BlogController.php:27
 * @route '/blogs/{slug}'
 */
        showForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
export const show = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/instructor/blogs/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
show.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: args.blog,
                }

    return show.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
show.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
show.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
    const showForm = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
        showForm.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\BlogController::show
 * @see app/Http/Controllers/Instructor/BlogController.php:0
 * @route '/instructor/blogs/{blog}'
 */
        showForm.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/instructor/blogs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\BlogController::create
 * @see app/Http/Controllers/Instructor/BlogController.php:26
 * @route '/instructor/blogs/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Instructor\BlogController::store
 * @see app/Http/Controllers/Instructor/BlogController.php:30
 * @route '/instructor/blogs'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/instructor/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::store
 * @see app/Http/Controllers/Instructor/BlogController.php:30
 * @route '/instructor/blogs'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::store
 * @see app/Http/Controllers/Instructor/BlogController.php:30
 * @route '/instructor/blogs'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::store
 * @see app/Http/Controllers/Instructor/BlogController.php:30
 * @route '/instructor/blogs'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::store
 * @see app/Http/Controllers/Instructor/BlogController.php:30
 * @route '/instructor/blogs'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
export const edit = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/instructor/blogs/{blog}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
edit.url = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'blogId' in args) {
            args = { blog: args.blogId }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.blogId
                : args.blog,
                }

    return edit.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
edit.get = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
edit.head = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
    const editForm = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
        editForm.get = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\BlogController::edit
 * @see app/Http/Controllers/Instructor/BlogController.php:53
 * @route '/instructor/blogs/{blog}/edit'
 */
        editForm.head = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
export const update = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/instructor/blogs/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
update.url = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'blogId' in args) {
            args = { blog: args.blogId }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.blogId
                : args.blog,
                }

    return update.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
update.put = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
update.patch = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
    const updateForm = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
        updateForm.put = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Instructor\BlogController::update
 * @see app/Http/Controllers/Instructor/BlogController.php:62
 * @route '/instructor/blogs/{blog}'
 */
        updateForm.patch = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Instructor\BlogController::destroy
 * @see app/Http/Controllers/Instructor/BlogController.php:87
 * @route '/instructor/blogs/{blog}'
 */
export const destroy = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/instructor/blogs/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::destroy
 * @see app/Http/Controllers/Instructor/BlogController.php:87
 * @route '/instructor/blogs/{blog}'
 */
destroy.url = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'blogId' in args) {
            args = { blog: args.blogId }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.blogId
                : args.blog,
                }

    return destroy.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::destroy
 * @see app/Http/Controllers/Instructor/BlogController.php:87
 * @route '/instructor/blogs/{blog}'
 */
destroy.delete = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::destroy
 * @see app/Http/Controllers/Instructor/BlogController.php:87
 * @route '/instructor/blogs/{blog}'
 */
    const destroyForm = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::destroy
 * @see app/Http/Controllers/Instructor/BlogController.php:87
 * @route '/instructor/blogs/{blog}'
 */
        destroyForm.delete = (args: { blog: number | { blogId: number } } | [blog: number | { blogId: number } ] | number | { blogId: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const blogs = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default blogs