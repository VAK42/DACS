import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
export const getContent = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContent.url(args, options),
    method: 'get',
})

getContent.definition = {
    methods: ["get","head"],
    url: '/api/instructor/lessons/{lessonId}/content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
getContent.url = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getContent.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
getContent.get = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContent.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
getContent.head = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getContent.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
    const getContentForm = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getContent.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
        getContentForm.get = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getContent.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\LessonContentController::getContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:58
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
        getContentForm.head = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getContent.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getContent.form = getContentForm
/**
* @see \App\Http\Controllers\Instructor\LessonContentController::uploadContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:9
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
export const uploadContent = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadContent.url(args, options),
    method: 'post',
})

uploadContent.definition = {
    methods: ["post"],
    url: '/api/instructor/lessons/{lessonId}/content',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\LessonContentController::uploadContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:9
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
uploadContent.url = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return uploadContent.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\LessonContentController::uploadContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:9
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
uploadContent.post = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadContent.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\LessonContentController::uploadContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:9
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
    const uploadContentForm = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadContent.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\LessonContentController::uploadContent
 * @see app/Http/Controllers/Instructor/LessonContentController.php:9
 * @route '/api/instructor/lessons/{lessonId}/content'
 */
        uploadContentForm.post = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadContent.url(args, options),
            method: 'post',
        })
    
    uploadContent.form = uploadContentForm
const LessonContentController = { getContent, uploadContent }

export default LessonContentController