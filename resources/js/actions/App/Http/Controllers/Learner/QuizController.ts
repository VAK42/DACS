import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\QuizController::submit
 * @see app/Http/Controllers/Learner/QuizController.php:30
 * @route '/api/quiz/{quizId}/submit'
 */
export const submit = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/quiz/{quizId}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\QuizController::submit
 * @see app/Http/Controllers/Learner/QuizController.php:30
 * @route '/api/quiz/{quizId}/submit'
 */
submit.url = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quizId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    quizId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quizId: args.quizId,
                }

    return submit.definition.url
            .replace('{quizId}', parsedArgs.quizId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\QuizController::submit
 * @see app/Http/Controllers/Learner/QuizController.php:30
 * @route '/api/quiz/{quizId}/submit'
 */
submit.post = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\QuizController::submit
 * @see app/Http/Controllers/Learner/QuizController.php:30
 * @route '/api/quiz/{quizId}/submit'
 */
    const submitForm = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\QuizController::submit
 * @see app/Http/Controllers/Learner/QuizController.php:30
 * @route '/api/quiz/{quizId}/submit'
 */
        submitForm.post = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(args, options),
            method: 'post',
        })
    
    submit.form = submitForm
/**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
export const show = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/quiz/{quizId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
show.url = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quizId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    quizId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quizId: args.quizId,
                }

    return show.definition.url
            .replace('{quizId}', parsedArgs.quizId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
show.get = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
show.head = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
    const showForm = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
        showForm.get = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\QuizController::show
 * @see app/Http/Controllers/Learner/QuizController.php:11
 * @route '/quiz/{quizId}'
 */
        showForm.head = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const QuizController = { submit, show }

export default QuizController