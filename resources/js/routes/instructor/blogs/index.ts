import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Instructor\BlogController::uploadImage
 * @see app/Http/Controllers/Instructor/BlogController.php:98
 * @route '/instructor/blogs/uploadImage'
 */
export const uploadImage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

uploadImage.definition = {
    methods: ["post"],
    url: '/instructor/blogs/uploadImage',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Instructor\BlogController::uploadImage
 * @see app/Http/Controllers/Instructor/BlogController.php:98
 * @route '/instructor/blogs/uploadImage'
 */
uploadImage.url = (options?: RouteQueryOptions) => {
    return uploadImage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Instructor\BlogController::uploadImage
 * @see app/Http/Controllers/Instructor/BlogController.php:98
 * @route '/instructor/blogs/uploadImage'
 */
uploadImage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Instructor\BlogController::uploadImage
 * @see app/Http/Controllers/Instructor/BlogController.php:98
 * @route '/instructor/blogs/uploadImage'
 */
    const uploadImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadImage.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Instructor\BlogController::uploadImage
 * @see app/Http/Controllers/Instructor/BlogController.php:98
 * @route '/instructor/blogs/uploadImage'
 */
        uploadImageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadImage.url(options),
            method: 'post',
        })
    
    uploadImage.form = uploadImageForm
const blogs = {
    uploadImage: Object.assign(uploadImage, uploadImage),
}

export default blogs