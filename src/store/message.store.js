import { messageService } from '../services/message.service'

export function getActionRemoveMessage(messageId) {
    return {
        type: 'removeMessage',
        messageId
    }
}
export function getActionAddMessage(message) {
    return {
        type: 'addMessage',
        message
    }
}
export function getActionUpdateMessage(message) {
    return {
        type: 'updateMessage',
        message
    }
}

export const messageStore = {
    state: {
        messages: []
    },
    getters: {
        messages({messages}) { return messages },
    },
    mutations: {
        setMessages(state, { messages }) {
            state.messages = messages
        },
        addMessage(state, { message }) {
            state.messages.push(message)
        },
        updateMessage(state, { message }) {
            const idx = state.messages.findIndex(c => c.id === message._id)
            state.messages.splice(idx, 1, message)
        },
        removeMessage(state, { messageId }) {
            state.messages = state.messages.filter(message => message._id !== messageId)
        },
    },
    actions: {
        async addMessage(context, { message }) {
            try {
                message = await messageService.save(message)
                context.commit(getActionAddMessage(message))
                return message
            } catch (err) {
                console.log('messageStore: Error in addMessage', err)
                throw err
            }
        },
        async updateMessage(context, { message }) {
            try {
                message = await messageService.save(message)
                context.commit(getActionUpdateMessage(message))
                return message
            } catch (err) {
                console.log('messageStore: Error in updateMessage', err)
                throw err
            }
        },
        async loadMessages(context) {
            try {
                const messages = await messageService.query()
                context.commit({ type: 'setMessages', messages })
            } catch (err) {
                console.log('messageStore: Error in loadMessages', err)
                throw err
            }
        },
        async removeMessage(context, { messageId }) {
            try {
                await messageService.remove(messageId)
                context.commit(getActionRemoveMessage(messageId))
            } catch (err) {
                console.log('messageStore: Error in removeMessage', err)
                throw err
            }
        },
    }
}