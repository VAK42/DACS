import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/certificates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\CertificateController::index
 * @see app/Http/Controllers/Admin/CertificateController.php:9
 * @route '/admin/certificates'
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
/**
* @see \App\Http\Controllers\Admin\CertificateController::store
 * @see app/Http/Controllers/Admin/CertificateController.php:36
 * @route '/admin/certificates'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/certificates',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\CertificateController::store
 * @see app/Http/Controllers/Admin/CertificateController.php:36
 * @route '/admin/certificates'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\CertificateController::store
 * @see app/Http/Controllers/Admin/CertificateController.php:36
 * @route '/admin/certificates'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\CertificateController::store
 * @see app/Http/Controllers/Admin/CertificateController.php:36
 * @route '/admin/certificates'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\CertificateController::store
 * @see app/Http/Controllers/Admin/CertificateController.php:36
 * @route '/admin/certificates'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\CertificateController::destroy
 * @see app/Http/Controllers/Admin/CertificateController.php:67
 * @route '/admin/certificates/{certificateId}'
 */
export const destroy = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/certificates/{certificateId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\CertificateController::destroy
 * @see app/Http/Controllers/Admin/CertificateController.php:67
 * @route '/admin/certificates/{certificateId}'
 */
destroy.url = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { certificateId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    certificateId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        certificateId: args.certificateId,
                }

    return destroy.definition.url
            .replace('{certificateId}', parsedArgs.certificateId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\CertificateController::destroy
 * @see app/Http/Controllers/Admin/CertificateController.php:67
 * @route '/admin/certificates/{certificateId}'
 */
destroy.delete = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\CertificateController::destroy
 * @see app/Http/Controllers/Admin/CertificateController.php:67
 * @route '/admin/certificates/{certificateId}'
 */
    const destroyForm = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\CertificateController::destroy
 * @see app/Http/Controllers/Admin/CertificateController.php:67
 * @route '/admin/certificates/{certificateId}'
 */
        destroyForm.delete = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\CertificateController::update
 * @see app/Http/Controllers/Admin/CertificateController.php:54
 * @route '/admin/certificates/{certificateId}'
 */
export const update = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/certificates/{certificateId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\CertificateController::update
 * @see app/Http/Controllers/Admin/CertificateController.php:54
 * @route '/admin/certificates/{certificateId}'
 */
update.url = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { certificateId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    certificateId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        certificateId: args.certificateId,
                }

    return update.definition.url
            .replace('{certificateId}', parsedArgs.certificateId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\CertificateController::update
 * @see app/Http/Controllers/Admin/CertificateController.php:54
 * @route '/admin/certificates/{certificateId}'
 */
update.put = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\CertificateController::update
 * @see app/Http/Controllers/Admin/CertificateController.php:54
 * @route '/admin/certificates/{certificateId}'
 */
    const updateForm = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\CertificateController::update
 * @see app/Http/Controllers/Admin/CertificateController.php:54
 * @route '/admin/certificates/{certificateId}'
 */
        updateForm.put = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/admin/certificates/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\CertificateController::exportMethod
 * @see app/Http/Controllers/Admin/CertificateController.php:73
 * @route '/admin/certificates/export'
 */
        exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const CertificateController = { index, store, destroy, update, exportMethod, export: exportMethod }

export default CertificateController