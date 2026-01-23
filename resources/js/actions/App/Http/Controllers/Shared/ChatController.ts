import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/chat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ChatController::index
 * @see app/Http/Controllers/Shared/ChatController.php:17
 * @route '/chat'
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
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
export const getContacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContacts.url(options),
    method: 'get',
})

getContacts.definition = {
    methods: ["get","head"],
    url: '/api/chat/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
getContacts.url = (options?: RouteQueryOptions) => {
    return getContacts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
getContacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getContacts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
getContacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getContacts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
    const getContactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getContacts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
        getContactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getContacts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ChatController::getContacts
 * @see app/Http/Controllers/Shared/ChatController.php:47
 * @route '/api/chat/contacts'
 */
        getContactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getContacts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getContacts.form = getContactsForm
/**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
export const getConversations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConversations.url(options),
    method: 'get',
})

getConversations.definition = {
    methods: ["get","head"],
    url: '/api/chat/conversations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
getConversations.url = (options?: RouteQueryOptions) => {
    return getConversations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
getConversations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConversations.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
getConversations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getConversations.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
    const getConversationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getConversations.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
        getConversationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConversations.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ChatController::getConversations
 * @see app/Http/Controllers/Shared/ChatController.php:112
 * @route '/api/chat/conversations'
 */
        getConversationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getConversations.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getConversations.form = getConversationsForm
/**
* @see \App\Http\Controllers\Shared\ChatController::createConversation
 * @see app/Http/Controllers/Shared/ChatController.php:140
 * @route '/api/chat/conversations'
 */
export const createConversation = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createConversation.url(options),
    method: 'post',
})

createConversation.definition = {
    methods: ["post"],
    url: '/api/chat/conversations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::createConversation
 * @see app/Http/Controllers/Shared/ChatController.php:140
 * @route '/api/chat/conversations'
 */
createConversation.url = (options?: RouteQueryOptions) => {
    return createConversation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::createConversation
 * @see app/Http/Controllers/Shared/ChatController.php:140
 * @route '/api/chat/conversations'
 */
createConversation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createConversation.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::createConversation
 * @see app/Http/Controllers/Shared/ChatController.php:140
 * @route '/api/chat/conversations'
 */
    const createConversationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: createConversation.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::createConversation
 * @see app/Http/Controllers/Shared/ChatController.php:140
 * @route '/api/chat/conversations'
 */
        createConversationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: createConversation.url(options),
            method: 'post',
        })
    
    createConversation.form = createConversationForm
/**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
export const getMessages = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMessages.url(args, options),
    method: 'get',
})

getMessages.definition = {
    methods: ["get","head"],
    url: '/api/chat/conversations/{conversationId}/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
getMessages.url = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    conversationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        conversationId: args.conversationId,
                }

    return getMessages.definition.url
            .replace('{conversationId}', parsedArgs.conversationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
getMessages.get = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMessages.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
getMessages.head = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMessages.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
    const getMessagesForm = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getMessages.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
        getMessagesForm.get = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getMessages.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ChatController::getMessages
 * @see app/Http/Controllers/Shared/ChatController.php:166
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
        getMessagesForm.head = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getMessages.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getMessages.form = getMessagesForm
/**
* @see \App\Http\Controllers\Shared\ChatController::sendMessage
 * @see app/Http/Controllers/Shared/ChatController.php:201
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
export const sendMessage = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(args, options),
    method: 'post',
})

sendMessage.definition = {
    methods: ["post"],
    url: '/api/chat/conversations/{conversationId}/messages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::sendMessage
 * @see app/Http/Controllers/Shared/ChatController.php:201
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
sendMessage.url = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    conversationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        conversationId: args.conversationId,
                }

    return sendMessage.definition.url
            .replace('{conversationId}', parsedArgs.conversationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::sendMessage
 * @see app/Http/Controllers/Shared/ChatController.php:201
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
sendMessage.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::sendMessage
 * @see app/Http/Controllers/Shared/ChatController.php:201
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
    const sendMessageForm = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendMessage.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::sendMessage
 * @see app/Http/Controllers/Shared/ChatController.php:201
 * @route '/api/chat/conversations/{conversationId}/messages'
 */
        sendMessageForm.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendMessage.url(args, options),
            method: 'post',
        })
    
    sendMessage.form = sendMessageForm
/**
* @see \App\Http\Controllers\Shared\ChatController::uploadFile
 * @see app/Http/Controllers/Shared/ChatController.php:233
 * @route '/api/chat/conversations/{conversationId}/upload'
 */
export const uploadFile = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadFile.url(args, options),
    method: 'post',
})

uploadFile.definition = {
    methods: ["post"],
    url: '/api/chat/conversations/{conversationId}/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::uploadFile
 * @see app/Http/Controllers/Shared/ChatController.php:233
 * @route '/api/chat/conversations/{conversationId}/upload'
 */
uploadFile.url = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    conversationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        conversationId: args.conversationId,
                }

    return uploadFile.definition.url
            .replace('{conversationId}', parsedArgs.conversationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::uploadFile
 * @see app/Http/Controllers/Shared/ChatController.php:233
 * @route '/api/chat/conversations/{conversationId}/upload'
 */
uploadFile.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadFile.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::uploadFile
 * @see app/Http/Controllers/Shared/ChatController.php:233
 * @route '/api/chat/conversations/{conversationId}/upload'
 */
    const uploadFileForm = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadFile.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::uploadFile
 * @see app/Http/Controllers/Shared/ChatController.php:233
 * @route '/api/chat/conversations/{conversationId}/upload'
 */
        uploadFileForm.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadFile.url(args, options),
            method: 'post',
        })
    
    uploadFile.form = uploadFileForm
/**
* @see \App\Http\Controllers\Shared\ChatController::markAsRead
 * @see app/Http/Controllers/Shared/ChatController.php:263
 * @route '/api/chat/conversations/{conversationId}/read'
 */
export const markAsRead = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

markAsRead.definition = {
    methods: ["post"],
    url: '/api/chat/conversations/{conversationId}/read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::markAsRead
 * @see app/Http/Controllers/Shared/ChatController.php:263
 * @route '/api/chat/conversations/{conversationId}/read'
 */
markAsRead.url = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    conversationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        conversationId: args.conversationId,
                }

    return markAsRead.definition.url
            .replace('{conversationId}', parsedArgs.conversationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::markAsRead
 * @see app/Http/Controllers/Shared/ChatController.php:263
 * @route '/api/chat/conversations/{conversationId}/read'
 */
markAsRead.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::markAsRead
 * @see app/Http/Controllers/Shared/ChatController.php:263
 * @route '/api/chat/conversations/{conversationId}/read'
 */
    const markAsReadForm = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAsRead.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::markAsRead
 * @see app/Http/Controllers/Shared/ChatController.php:263
 * @route '/api/chat/conversations/{conversationId}/read'
 */
        markAsReadForm.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAsRead.url(args, options),
            method: 'post',
        })
    
    markAsRead.form = markAsReadForm
/**
* @see \App\Http\Controllers\Shared\ChatController::typing
 * @see app/Http/Controllers/Shared/ChatController.php:278
 * @route '/api/chat/conversations/{conversationId}/typing'
 */
export const typing = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: typing.url(args, options),
    method: 'post',
})

typing.definition = {
    methods: ["post"],
    url: '/api/chat/conversations/{conversationId}/typing',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Shared\ChatController::typing
 * @see app/Http/Controllers/Shared/ChatController.php:278
 * @route '/api/chat/conversations/{conversationId}/typing'
 */
typing.url = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversationId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    conversationId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        conversationId: args.conversationId,
                }

    return typing.definition.url
            .replace('{conversationId}', parsedArgs.conversationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ChatController::typing
 * @see app/Http/Controllers/Shared/ChatController.php:278
 * @route '/api/chat/conversations/{conversationId}/typing'
 */
typing.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: typing.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Shared\ChatController::typing
 * @see app/Http/Controllers/Shared/ChatController.php:278
 * @route '/api/chat/conversations/{conversationId}/typing'
 */
    const typingForm = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: typing.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Shared\ChatController::typing
 * @see app/Http/Controllers/Shared/ChatController.php:278
 * @route '/api/chat/conversations/{conversationId}/typing'
 */
        typingForm.post = (args: { conversationId: string | number } | [conversationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: typing.url(args, options),
            method: 'post',
        })
    
    typing.form = typingForm
const ChatController = { index, getContacts, getConversations, createConversation, getMessages, sendMessage, uploadFile, markAsRead, typing }

export default ChatController