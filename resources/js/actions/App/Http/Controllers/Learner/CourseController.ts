import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
export const learn = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: learn.url(args, options),
    method: 'get',
})

learn.definition = {
    methods: ["get","head"],
    url: '/courses/{courseId}/learn',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
learn.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return learn.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
learn.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: learn.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
learn.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: learn.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
    const learnForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: learn.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
        learnForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: learn.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\CourseController::learn
 * @see app/Http/Controllers/Learner/CourseController.php:10
 * @route '/courses/{courseId}/learn'
 */
        learnForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: learn.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    learn.form = learnForm
const CourseController = { learn }

export default CourseController