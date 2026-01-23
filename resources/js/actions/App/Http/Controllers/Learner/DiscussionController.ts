import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
export const index = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/courses/{courseId}/discussions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
index.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { courseId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    courseId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        courseId: args.courseId,
                }

    return index.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
index.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
index.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
    const indexForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
        indexForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\DiscussionController::index
 * @see app/Http/Controllers/Learner/DiscussionController.php:26
 * @route '/api/courses/{courseId}/discussions'
 */
        indexForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Learner\DiscussionController::store
 * @see app/Http/Controllers/Learner/DiscussionController.php:30
 * @route '/api/courses/{courseId}/discussions'
 */
export const store = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/courses/{courseId}/discussions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\DiscussionController::store
 * @see app/Http/Controllers/Learner/DiscussionController.php:30
 * @route '/api/courses/{courseId}/discussions'
 */
store.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { courseId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    courseId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        courseId: args.courseId,
                }

    return store.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\DiscussionController::store
 * @see app/Http/Controllers/Learner/DiscussionController.php:30
 * @route '/api/courses/{courseId}/discussions'
 */
store.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\DiscussionController::store
 * @see app/Http/Controllers/Learner/DiscussionController.php:30
 * @route '/api/courses/{courseId}/discussions'
 */
    const storeForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\DiscussionController::store
 * @see app/Http/Controllers/Learner/DiscussionController.php:30
 * @route '/api/courses/{courseId}/discussions'
 */
        storeForm.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Learner\DiscussionController::reply
 * @see app/Http/Controllers/Learner/DiscussionController.php:44
 * @route '/api/discussions/{discussionId}/reply'
 */
export const reply = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

reply.definition = {
    methods: ["post"],
    url: '/api/discussions/{discussionId}/reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\DiscussionController::reply
 * @see app/Http/Controllers/Learner/DiscussionController.php:44
 * @route '/api/discussions/{discussionId}/reply'
 */
reply.url = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { discussionId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    discussionId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        discussionId: args.discussionId,
                }

    return reply.definition.url
            .replace('{discussionId}', parsedArgs.discussionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\DiscussionController::reply
 * @see app/Http/Controllers/Learner/DiscussionController.php:44
 * @route '/api/discussions/{discussionId}/reply'
 */
reply.post = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\DiscussionController::reply
 * @see app/Http/Controllers/Learner/DiscussionController.php:44
 * @route '/api/discussions/{discussionId}/reply'
 */
    const replyForm = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reply.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\DiscussionController::reply
 * @see app/Http/Controllers/Learner/DiscussionController.php:44
 * @route '/api/discussions/{discussionId}/reply'
 */
        replyForm.post = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reply.url(args, options),
            method: 'post',
        })
    
    reply.form = replyForm
/**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
export const page = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/courses/{courseId}/discussions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
page.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { courseId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    courseId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        courseId: args.courseId,
                }

    return page.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
page.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
page.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
    const pageForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: page.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
        pageForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: page.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\DiscussionController::page
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
        pageForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: page.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    page.form = pageForm
const DiscussionController = { index, store, reply, page }

export default DiscussionController