import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
export const getAssessment = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAssessment.url(args, options),
    method: 'get',
})

getAssessment.definition = {
    methods: ["get","head"],
    url: '/api/instructor/courses/{courseId}/assessment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
getAssessment.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getAssessment.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
getAssessment.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAssessment.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
getAssessment.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAssessment.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
    const getAssessmentForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getAssessment.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
        getAssessmentForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAssessment.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\AssessmentController::getAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:9
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
        getAssessmentForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAssessment.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getAssessment.form = getAssessmentForm
/**
* @see \App\Http\Controllers\Instructor\AssessmentController::saveAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:27
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
export const saveAssessment = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveAssessment.url(args, options),
    method: 'post',
})

saveAssessment.definition = {
    methods: ["post"],
    url: '/api/instructor/courses/{courseId}/assessment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\AssessmentController::saveAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:27
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
saveAssessment.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return saveAssessment.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\AssessmentController::saveAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:27
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
saveAssessment.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveAssessment.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\AssessmentController::saveAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:27
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
    const saveAssessmentForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveAssessment.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\AssessmentController::saveAssessment
 * @see app/Http/Controllers/Instructor/AssessmentController.php:27
 * @route '/api/instructor/courses/{courseId}/assessment'
 */
        saveAssessmentForm.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveAssessment.url(args, options),
            method: 'post',
        })
    
    saveAssessment.form = saveAssessmentForm
const AssessmentController = { getAssessment, saveAssessment }

export default AssessmentController