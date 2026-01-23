import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteCourse
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:67
 * @route '/api/instructor/courses/{courseId}'
 */
export const deleteCourse = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteCourse.url(args, options),
    method: 'delete',
})

deleteCourse.definition = {
    methods: ["delete"],
    url: '/api/instructor/courses/{courseId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteCourse
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:67
 * @route '/api/instructor/courses/{courseId}'
 */
deleteCourse.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteCourse.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteCourse
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:67
 * @route '/api/instructor/courses/{courseId}'
 */
deleteCourse.delete = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteCourse.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteCourse
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:67
 * @route '/api/instructor/courses/{courseId}'
 */
    const deleteCourseForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteCourse.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteCourse
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:67
 * @route '/api/instructor/courses/{courseId}'
 */
        deleteCourseForm.delete = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteCourse.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteCourse.form = deleteCourseForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:79
 * @route '/api/instructor/courses/{courseId}/modules'
 */
export const addModule = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addModule.url(args, options),
    method: 'post',
})

addModule.definition = {
    methods: ["post"],
    url: '/api/instructor/courses/{courseId}/modules',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:79
 * @route '/api/instructor/courses/{courseId}/modules'
 */
addModule.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return addModule.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:79
 * @route '/api/instructor/courses/{courseId}/modules'
 */
addModule.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addModule.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:79
 * @route '/api/instructor/courses/{courseId}/modules'
 */
    const addModuleForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addModule.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:79
 * @route '/api/instructor/courses/{courseId}/modules'
 */
        addModuleForm.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addModule.url(args, options),
            method: 'post',
        })
    
    addModule.form = addModuleForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::publish
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:73
 * @route '/api/instructor/courses/{courseId}/publish'
 */
export const publish = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: publish.url(args, options),
    method: 'post',
})

publish.definition = {
    methods: ["post"],
    url: '/api/instructor/courses/{courseId}/publish',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::publish
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:73
 * @route '/api/instructor/courses/{courseId}/publish'
 */
publish.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return publish.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::publish
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:73
 * @route '/api/instructor/courses/{courseId}/publish'
 */
publish.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: publish.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::publish
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:73
 * @route '/api/instructor/courses/{courseId}/publish'
 */
    const publishForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: publish.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::publish
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:73
 * @route '/api/instructor/courses/{courseId}/publish'
 */
        publishForm.post = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: publish.url(args, options),
            method: 'post',
        })
    
    publish.form = publishForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::store
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:31
 * @route '/api/instructor/courses'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/instructor/courses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::store
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:31
 * @route '/api/instructor/courses'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::store
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:31
 * @route '/api/instructor/courses'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::store
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:31
 * @route '/api/instructor/courses'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::store
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:31
 * @route '/api/instructor/courses'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::update
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:43
 * @route '/api/instructor/courses/{courseId}'
 */
export const update = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/instructor/courses/{courseId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::update
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:43
 * @route '/api/instructor/courses/{courseId}'
 */
update.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::update
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:43
 * @route '/api/instructor/courses/{courseId}'
 */
update.put = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::update
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:43
 * @route '/api/instructor/courses/{courseId}'
 */
    const updateForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::update
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:43
 * @route '/api/instructor/courses/{courseId}'
 */
        updateForm.put = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:160
 * @route '/api/instructor/lessons/{lessonId}'
 */
export const deleteLesson = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteLesson.url(args, options),
    method: 'delete',
})

deleteLesson.definition = {
    methods: ["delete"],
    url: '/api/instructor/lessons/{lessonId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:160
 * @route '/api/instructor/lessons/{lessonId}'
 */
deleteLesson.url = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteLesson.definition.url
            .replace('{lessonId}', parsedArgs.lessonId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:160
 * @route '/api/instructor/lessons/{lessonId}'
 */
deleteLesson.delete = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteLesson.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:160
 * @route '/api/instructor/lessons/{lessonId}'
 */
    const deleteLessonForm = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteLesson.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:160
 * @route '/api/instructor/lessons/{lessonId}'
 */
        deleteLessonForm.delete = (args: { lessonId: string | number } | [lessonId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteLesson.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteLesson.form = deleteLessonForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:135
 * @route '/api/instructor/modules/{moduleId}/lessons'
 */
export const addLesson = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addLesson.url(args, options),
    method: 'post',
})

addLesson.definition = {
    methods: ["post"],
    url: '/api/instructor/modules/{moduleId}/lessons',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:135
 * @route '/api/instructor/modules/{moduleId}/lessons'
 */
addLesson.url = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { moduleId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    moduleId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        moduleId: args.moduleId,
                }

    return addLesson.definition.url
            .replace('{moduleId}', parsedArgs.moduleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:135
 * @route '/api/instructor/modules/{moduleId}/lessons'
 */
addLesson.post = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addLesson.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:135
 * @route '/api/instructor/modules/{moduleId}/lessons'
 */
    const addLessonForm = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addLesson.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::addLesson
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:135
 * @route '/api/instructor/modules/{moduleId}/lessons'
 */
        addLessonForm.post = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addLesson.url(args, options),
            method: 'post',
        })
    
    addLesson.form = addLessonForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::reorderModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:106
 * @route '/api/instructor/modules/{moduleId}/reorder'
 */
export const reorderModule = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderModule.url(args, options),
    method: 'post',
})

reorderModule.definition = {
    methods: ["post"],
    url: '/api/instructor/modules/{moduleId}/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::reorderModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:106
 * @route '/api/instructor/modules/{moduleId}/reorder'
 */
reorderModule.url = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { moduleId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    moduleId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        moduleId: args.moduleId,
                }

    return reorderModule.definition.url
            .replace('{moduleId}', parsedArgs.moduleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::reorderModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:106
 * @route '/api/instructor/modules/{moduleId}/reorder'
 */
reorderModule.post = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderModule.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::reorderModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:106
 * @route '/api/instructor/modules/{moduleId}/reorder'
 */
    const reorderModuleForm = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorderModule.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::reorderModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:106
 * @route '/api/instructor/modules/{moduleId}/reorder'
 */
        reorderModuleForm.post = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorderModule.url(args, options),
            method: 'post',
        })
    
    reorderModule.form = reorderModuleForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::updateModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:95
 * @route '/api/instructor/modules/{moduleId}'
 */
export const updateModule = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateModule.url(args, options),
    method: 'put',
})

updateModule.definition = {
    methods: ["put"],
    url: '/api/instructor/modules/{moduleId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::updateModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:95
 * @route '/api/instructor/modules/{moduleId}'
 */
updateModule.url = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { moduleId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    moduleId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        moduleId: args.moduleId,
                }

    return updateModule.definition.url
            .replace('{moduleId}', parsedArgs.moduleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::updateModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:95
 * @route '/api/instructor/modules/{moduleId}'
 */
updateModule.put = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateModule.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::updateModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:95
 * @route '/api/instructor/modules/{moduleId}'
 */
    const updateModuleForm = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateModule.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::updateModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:95
 * @route '/api/instructor/modules/{moduleId}'
 */
        updateModuleForm.put = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateModule.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateModule.form = updateModuleForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:126
 * @route '/api/instructor/modules/{moduleId}'
 */
export const deleteModule = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteModule.url(args, options),
    method: 'delete',
})

deleteModule.definition = {
    methods: ["delete"],
    url: '/api/instructor/modules/{moduleId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:126
 * @route '/api/instructor/modules/{moduleId}'
 */
deleteModule.url = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { moduleId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    moduleId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        moduleId: args.moduleId,
                }

    return deleteModule.definition.url
            .replace('{moduleId}', parsedArgs.moduleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:126
 * @route '/api/instructor/modules/{moduleId}'
 */
deleteModule.delete = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteModule.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:126
 * @route '/api/instructor/modules/{moduleId}'
 */
    const deleteModuleForm = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteModule.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::deleteModule
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:126
 * @route '/api/instructor/modules/{moduleId}'
 */
        deleteModuleForm.delete = (args: { moduleId: string | number } | [moduleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteModule.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteModule.form = deleteModuleForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/instructor/courses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::create
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:20
 * @route '/instructor/courses/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
export const edit = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/instructor/courses/{courseId}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
edit.url = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{courseId}', parsedArgs.courseId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
edit.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
edit.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
    const editForm = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
        editForm.get = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Instructor\CourseManagementController::edit
 * @see app/Http/Controllers/Instructor/CourseManagementController.php:25
 * @route '/instructor/courses/{courseId}/edit'
 */
        editForm.head = (args: { courseId: string | number } | [courseId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const CourseManagementController = { deleteCourse, addModule, publish, store, update, deleteLesson, addLesson, reorderModule, updateModule, deleteModule, create, edit }

export default CourseManagementController