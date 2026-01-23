import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
export const show = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/assessment/{assessmentId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
show.url = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assessmentId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    assessmentId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assessmentId: args.assessmentId,
                }

    return show.definition.url
            .replace('{assessmentId}', parsedArgs.assessmentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
show.get = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
show.head = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
    const showForm = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
        showForm.get = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\AssessmentController::show
 * @see app/Http/Controllers/Learner/AssessmentController.php:11
 * @route '/assessment/{assessmentId}'
 */
        showForm.head = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Learner\AssessmentController::submit
 * @see app/Http/Controllers/Learner/AssessmentController.php:38
 * @route '/api/assessment/{assessmentId}/submit'
 */
export const submit = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/assessment/{assessmentId}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\AssessmentController::submit
 * @see app/Http/Controllers/Learner/AssessmentController.php:38
 * @route '/api/assessment/{assessmentId}/submit'
 */
submit.url = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assessmentId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    assessmentId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assessmentId: args.assessmentId,
                }

    return submit.definition.url
            .replace('{assessmentId}', parsedArgs.assessmentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\AssessmentController::submit
 * @see app/Http/Controllers/Learner/AssessmentController.php:38
 * @route '/api/assessment/{assessmentId}/submit'
 */
submit.post = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\AssessmentController::submit
 * @see app/Http/Controllers/Learner/AssessmentController.php:38
 * @route '/api/assessment/{assessmentId}/submit'
 */
    const submitForm = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\AssessmentController::submit
 * @see app/Http/Controllers/Learner/AssessmentController.php:38
 * @route '/api/assessment/{assessmentId}/submit'
 */
        submitForm.post = (args: { assessmentId: string | number } | [assessmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(args, options),
            method: 'post',
        })
    
    submit.form = submitForm
const AssessmentController = { show, submit }

export default AssessmentController