import { userService } from '../services/user.service'

export function getActionRemoveUser(userId) {
    return {
        type: 'removeUser',
        userId
    }
}
export function getActionAddUser(user) {
    return {
        type: 'addUser',
        user
    }
}
export function getActionUpdateUser(user) {
    return {
        type: 'updateUser',
        user
    }
}

export const userStore = {
    state: {
        users: []
    },
    getters: {
        users({users}) { return users },
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users
        },
        addUser(state, { user }) {
            state.users.push(user)
        },
        updateUser(state, { user }) {
            const idx = state.users.findIndex(c => c.id === user._id)
            state.users.splice(idx, 1, user)
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
    },
    actions: {
        async addUser(context, { user }) {
            try {
                user = await userService.save(user)
                context.commit(getActionAddUser(user))
                return user
            } catch (err) {
                console.log('userStore: Error in addUser', err)
                throw err
            }
        },
        async updateUser(context, { user }) {
            try {
                user = await userService.save(user)
                context.commit(getActionUpdateUser(user))
                return user
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }
        },
        async loadUsers(context) {
            try {
                const users = await userService.query()
                context.commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async removeUser(context, { userId }) {
            try {
                await userService.remove(userId)
                context.commit(getActionRemoveUser(userId))
            } catch (err) {
                console.log('userStore: Error in removeUser', err)
                throw err
            }
        }
    }
}