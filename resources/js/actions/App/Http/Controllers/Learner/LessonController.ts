import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\LessonController::complete
 * @see app/Http/Controllers/Learner/LessonController.php:85
 * @route '/api/lessons/{lessonId}/complete'
 */
export const complete = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/api/lessons/{lessonId}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\LessonController::complete
 * @see app/Http/Controllers/Learner/LessonController.php:85
 * @route '/api/lessons/{lessonId}/complete'
 */
complete.url = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lessonId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    lessonId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lessonId: args.lessonId,
                }

    return complete.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\LessonController::complete
 * @see app/Http/Controllers/Learner/LessonController.php:85
 * @route '/api/lessons/{lessonId}/complete'
 */
complete.post = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\LessonController::complete
 * @see app/Http/Controllers/Learner/LessonController.php:85
 * @route '/api/lessons/{lessonId}/complete'
 */
    const completeForm = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\LessonController::complete
 * @see app/Http/Controllers/Learner/LessonController.php:85
 * @route '/api/lessons/{lessonId}/complete'
 */
        completeForm.post = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
export const show = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/lessons/{lessonId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
show.url = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lessonId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    lessonId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lessonId: args.lessonId,
                }

    return show.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
show.get = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
show.head = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
    const showForm = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
        showForm.get = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\LessonController::show
 * @see app/Http/Controllers/Learner/LessonController.php:14
 * @route '/lessons/{lessonId}'
 */
        showForm.head = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const LessonController = { complete, show }

export default LessonController