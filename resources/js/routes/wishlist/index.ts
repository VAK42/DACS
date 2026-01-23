import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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