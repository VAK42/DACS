import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/certificates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\CertificateController::index
 * @see app/Http/Controllers/Learner/CertificateController.php:16
 * @route '/certificates'
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
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
export const show = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/certificates/{certificateId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
show.url = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{certificateId}', parsedArgs.certificateId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
show.get = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
show.head = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
    const showForm = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
        showForm.get = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\CertificateController::show
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
        showForm.head = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const CertificateController = { index, show }

export default CertificateController