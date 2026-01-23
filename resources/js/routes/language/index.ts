import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Shared\LanguageController::update
 * @see app/Http/Controllers/Shared/LanguageController.php:9
 * @route '/language'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/language',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\LanguageController::update
 * @see app/Http/Controllers/Shared/LanguageController.php:9
 * @route '/language'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\LanguageController::update
 * @see app/Http/Controllers/Shared/LanguageController.php:9
 * @route '/language'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\LanguageController::update
 * @see app/Http/Controllers/Shared/LanguageController.php:9
 * @route '/language'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\LanguageController::update
 * @see app/Http/Controllers/Shared/LanguageController.php:9
 * @route '/language'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const language = {
    update: Object.assign(update, update),
}

export default language