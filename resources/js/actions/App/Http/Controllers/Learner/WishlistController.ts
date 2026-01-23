import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Learner\WishlistController::toggle
 * @see app/Http/Controllers/Learner/WishlistController.php:18
 * @route '/api/wishlist/toggle'
 */
export const toggle = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(options),
    method: 'post',
})

toggle.definition = {
    methods: ["post"],
    url: '/api/wishlist/toggle',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Learner\WishlistController::toggle
 * @see app/Http/Controllers/Learner/WishlistController.php:18
 * @route '/api/wishlist/toggle'
 */
toggle.url = (options?: RouteQueryOptions) => {
    return toggle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\WishlistController::toggle
 * @see app/Http/Controllers/Learner/WishlistController.php:18
 * @route '/api/wishlist/toggle'
 */
toggle.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Learner\WishlistController::toggle
 * @see app/Http/Controllers/Learner/WishlistController.php:18
 * @route '/api/wishlist/toggle'
 */
    const toggleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggle.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Learner\WishlistController::toggle
 * @see app/Http/Controllers/Learner/WishlistController.php:18
 * @route '/api/wishlist/toggle'
 */
        toggleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggle.url(options),
            method: 'post',
        })
    
    toggle.form = toggleForm
/**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/wishlist',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Learner\WishlistController::index
 * @see app/Http/Controllers/Learner/WishlistController.php:9
 * @route '/wishlist'
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
const WishlistController = { toggle, index }

export default WishlistController