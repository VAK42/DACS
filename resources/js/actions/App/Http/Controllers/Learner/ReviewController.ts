import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\ReviewController::store
 * @see app/Http/Controllers/Learner/ReviewController.php:23
 * @route '/api/courses/{courseId}/reviews'
 */
export const store = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/courses/{courseId}/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\ReviewController::store
 * @see app/Http/Controllers/Learner/ReviewController.php:23
 * @route '/api/courses/{courseId}/reviews'
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
* @see \App\Http\Controllers\Learner\ReviewController::store
 * @see app/Http/Controllers/Learner/ReviewController.php:23
 * @route '/api/courses/{courseId}/reviews'
 */
store.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\ReviewController::store
 * @see app/Http/Controllers/Learner/ReviewController.php:23
 * @route '/api/courses/{courseId}/reviews'
 */
    const storeForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\ReviewController::store
 * @see app/Http/Controllers/Learner/ReviewController.php:23
 * @route '/api/courses/{courseId}/reviews'
 */
        storeForm.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
 */
export const index = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/courses/{courseId}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
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
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
 */
index.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
 */
index.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
 */
    const indexForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
 */
        indexForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\ReviewController::index
 * @see app/Http/Controllers/Learner/ReviewController.php:11
 * @route '/courses/{courseId}/reviews'
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
const ReviewController = { store, index }

export default ReviewController