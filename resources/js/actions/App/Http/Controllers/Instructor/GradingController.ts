import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\GradingController::grade
 * @see app/Http/Controllers/Instructor/GradingController.php:49
 * @route '/api/instructor/submissions/{submissionId}/grade'
 */
export const grade = (args: { submissionId: string | number } | [submissionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grade.url(args, options),
    method: 'post',
})

grade.definition = {
    methods: ["post"],
    url: '/api/instructor/submissions/{submissionId}/grade',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\GradingController::grade
 * @see app/Http/Controllers/Instructor/GradingController.php:49
 * @route '/api/instructor/submissions/{submissionId}/grade'
 */
grade.url = (args: { submissionId: string | number } | [submissionId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submissionId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submissionId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        submissionId: args.submissionId,
                }

    return grade.definition.url
            .replace('{submissionId}', parsedArgs.submissionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\GradingController::grade
 * @see app/Http/Controllers/Instructor/GradingController.php:49
 * @route '/api/instructor/submissions/{submissionId}/grade'
 */
grade.post = (args: { submissionId: string | number } | [submissionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grade.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\GradingController::grade
 * @see app/Http/Controllers/Instructor/GradingController.php:49
 * @route '/api/instructor/submissions/{submissionId}/grade'
 */
    const gradeForm = (args: { submissionId: string | number } | [submissionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: grade.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\GradingController::grade
 * @see app/Http/Controllers/Instructor/GradingController.php:49
 * @route '/api/instructor/submissions/{submissionId}/grade'
 */
        gradeForm.post = (args: { submissionId: string | number } | [submissionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: grade.url(args, options),
            method: 'post',
        })
    
    grade.form = gradeForm
/**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/instructor/grading',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\GradingController::index
 * @see app/Http/Controllers/Instructor/GradingController.php:9
 * @route '/instructor/grading'
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
const GradingController = { grade, index }

export default GradingController