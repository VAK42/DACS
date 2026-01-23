import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SettingsController::uploadQr
 * @see app/Http/Controllers/Admin/SettingsController.php:8
 * @route '/admin/uploadQr'
 */
export const uploadQr = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadQr.url(options),
    method: 'post',
})

uploadQr.definition = {
    methods: ["post"],
    url: '/admin/uploadQr',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SettingsController::uploadQr
 * @see app/Http/Controllers/Admin/SettingsController.php:8
 * @route '/admin/uploadQr'
 */
uploadQr.url = (options?: RouteQueryOptions) => {
    return uploadQr.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SettingsController::uploadQr
 * @see app/Http/Controllers/Admin/SettingsController.php:8
 * @route '/admin/uploadQr'
 */
uploadQr.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadQr.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\SettingsController::uploadQr
 * @see app/Http/Controllers/Admin/SettingsController.php:8
 * @route '/admin/uploadQr'
 */
    const uploadQrForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadQr.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\SettingsController::uploadQr
 * @see app/Http/Controllers/Admin/SettingsController.php:8
 * @route '/admin/uploadQr'
 */
        uploadQrForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadQr.url(options),
            method: 'post',
        })
    
    uploadQr.form = uploadQrForm
const SettingsController = { uploadQr }

export default SettingsController