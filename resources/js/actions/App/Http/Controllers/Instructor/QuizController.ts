import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
export const getQuiz = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getQuiz.url(args, options),
    method: 'get',
})

getQuiz.definition = {
    methods: ["get","head"],
    url: '/api/instructor/courses/{courseId}/quiz',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
getQuiz.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getQuiz.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
getQuiz.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getQuiz.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
getQuiz.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getQuiz.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
    const getQuizForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getQuiz.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
        getQuizForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getQuiz.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\QuizController::getQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:10
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
        getQuizForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getQuiz.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getQuiz.form = getQuizForm
/**
* @see \App\Http\Controllers\Instructor\QuizController::saveQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:18
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
export const saveQuiz = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveQuiz.url(args, options),
    method: 'post',
})

saveQuiz.definition = {
    methods: ["post"],
    url: '/api/instructor/courses/{courseId}/quiz',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\QuizController::saveQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:18
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
saveQuiz.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return saveQuiz.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\QuizController::saveQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:18
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
saveQuiz.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveQuiz.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\QuizController::saveQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:18
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
    const saveQuizForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveQuiz.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\QuizController::saveQuiz
 * @see app/Http/Controllers/Instructor/QuizController.php:18
 * @route '/api/instructor/courses/{courseId}/quiz'
 */
        saveQuizForm.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveQuiz.url(args, options),
            method: 'post',
        })
    
    saveQuiz.form = saveQuizForm
/**
* @see \App\Http\Controllers\Instructor\QuizController::deleteQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:91
 * @route '/api/instructor/questions/{questionId}'
 */
export const deleteQuestion = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteQuestion.url(args, options),
    method: 'delete',
})

deleteQuestion.definition = {
    methods: ["delete"],
    url: '/api/instructor/questions/{questionId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Instructor\QuizController::deleteQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:91
 * @route '/api/instructor/questions/{questionId}'
 */
deleteQuestion.url = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { questionId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    questionId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        questionId: args.questionId,
                }

    return deleteQuestion.definition.url
            .replace('{questionId}', parsedArgs.questionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\QuizController::deleteQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:91
 * @route '/api/instructor/questions/{questionId}'
 */
deleteQuestion.delete = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteQuestion.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Instructor\QuizController::deleteQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:91
 * @route '/api/instructor/questions/{questionId}'
 */
    const deleteQuestionForm = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteQuestion.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\QuizController::deleteQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:91
 * @route '/api/instructor/questions/{questionId}'
 */
        deleteQuestionForm.delete = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteQuestion.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteQuestion.form = deleteQuestionForm
/**
* @see \App\Http\Controllers\Instructor\QuizController::updateQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:77
 * @route '/api/instructor/questions/{questionId}'
 */
export const updateQuestion = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateQuestion.url(args, options),
    method: 'put',
})

updateQuestion.definition = {
    methods: ["put"],
    url: '/api/instructor/questions/{questionId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Instructor\QuizController::updateQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:77
 * @route '/api/instructor/questions/{questionId}'
 */
updateQuestion.url = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { questionId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    questionId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        questionId: args.questionId,
                }

    return updateQuestion.definition.url
            .replace('{questionId}', parsedArgs.questionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\QuizController::updateQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:77
 * @route '/api/instructor/questions/{questionId}'
 */
updateQuestion.put = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateQuestion.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Instructor\QuizController::updateQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:77
 * @route '/api/instructor/questions/{questionId}'
 */
    const updateQuestionForm = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateQuestion.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\QuizController::updateQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:77
 * @route '/api/instructor/questions/{questionId}'
 */
        updateQuestionForm.put = (args: { questionId: string | number } | [questionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateQuestion.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateQuestion.form = updateQuestionForm
/**
* @see \App\Http\Controllers\Instructor\QuizController::addQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:56
 * @route '/api/instructor/quizzes/{quizId}/questions'
 */
export const addQuestion = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addQuestion.url(args, options),
    method: 'post',
})

addQuestion.definition = {
    methods: ["post"],
    url: '/api/instructor/quizzes/{quizId}/questions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\QuizController::addQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:56
 * @route '/api/instructor/quizzes/{quizId}/questions'
 */
addQuestion.url = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return addQuestion.definition.url
            .replace('{quizId}', parsedArgs.quizId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\QuizController::addQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:56
 * @route '/api/instructor/quizzes/{quizId}/questions'
 */
addQuestion.post = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addQuestion.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\QuizController::addQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:56
 * @route '/api/instructor/quizzes/{quizId}/questions'
 */
    const addQuestionForm = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addQuestion.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\QuizController::addQuestion
 * @see app/Http/Controllers/Instructor/QuizController.php:56
 * @route '/api/instructor/quizzes/{quizId}/questions'
 */
        addQuestionForm.post = (args: { quizId: string | number } | [quizId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addQuestion.url(args, options),
            method: 'post',
        })
    
    addQuestion.form = addQuestionForm
const QuizController = { getQuiz, saveQuiz, deleteQuestion, updateQuestion, addQuestion }

export default QuizController