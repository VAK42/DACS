import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
export const discussions = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discussions.url(args, options),
    method: 'get',
})

discussions.definition = {
    methods: ["get","head"],
    url: '/courses/{courseId}/discussions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
discussions.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return discussions.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
discussions.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discussions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
discussions.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discussions.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
    const discussionsForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: discussions.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
        discussionsForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: discussions.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\DiscussionController::discussions
 * @see app/Http/Controllers/Learner/DiscussionController.php:12
 * @route '/courses/{courseId}/discussions'
 */
        discussionsForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: discussions.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    discussions.form = discussionsForm
const course = {
    discussions: Object.assign(discussions, discussions),
}

export default course