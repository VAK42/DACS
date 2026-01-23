import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
export const view = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/certificates/{certificateId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
view.url = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{certificateId}', parsedArgs.certificateId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
view.get = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
view.head = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
    const viewForm = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
        viewForm.get = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\CertificateController::view
 * @see app/Http/Controllers/Learner/CertificateController.php:72
 * @route '/certificates/{certificateId}'
 */
        viewForm.head = (args: { certificateId: string | number } | [certificateId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
const certificates = {
    view: Object.assign(view, view),
}

export default certificates