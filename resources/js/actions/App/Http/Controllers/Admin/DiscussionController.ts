import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/discussions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DiscussionController::index
 * @see app/Http/Controllers/Admin/DiscussionController.php:9
 * @route '/admin/discussions'
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
* @see \App\Http\Controllers\Admin\DiscussionController::destroy
 * @see app/Http/Controllers/Admin/DiscussionController.php:46
 * @route '/admin/discussions/{discussionId}'
 */
export const destroy = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/discussions/{discussionId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\DiscussionController::destroy
 * @see app/Http/Controllers/Admin/DiscussionController.php:46
 * @route '/admin/discussions/{discussionId}'
 */
destroy.url = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { discussionId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    discussionId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        discussionId: args.discussionId,
                }

    return destroy.definition.url
            .replace('{discussionId}', parsedArgs.discussionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DiscussionController::destroy
 * @see app/Http/Controllers/Admin/DiscussionController.php:46
 * @route '/admin/discussions/{discussionId}'
 */
destroy.delete = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\DiscussionController::destroy
 * @see app/Http/Controllers/Admin/DiscussionController.php:46
 * @route '/admin/discussions/{discussionId}'
 */
    const destroyForm = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DiscussionController::destroy
 * @see app/Http/Controllers/Admin/DiscussionController.php:46
 * @route '/admin/discussions/{discussionId}'
 */
        destroyForm.delete = (args: { discussionId: string | number } | [discussionId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const DiscussionController = { index, destroy }

export default DiscussionController