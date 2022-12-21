import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const STORAGE_KEY = 'users'

export const userService = {
    query,
    getById,
    save,
    remove,
    getEmptyUser,
}
window.cs = userService

async function query() {
    var users = await storageService.query(STORAGE_KEY)
    return users
    // return httpService.get(STORAGE_KEY, filterBy)
}

async function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
    // return httpService.get(`user/${userId}`)
}
function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function save(user) {
    var savedUser
    if (user._id) {
        // saveduser = await storageService.put(STORAGE_KEY, user)
        savedUser = await httpService.put(`user/${user._id}`, user)
    } else {
        // saveduser = await storageService.post(STORAGE_KEY, user)
        savedUser = await httpService.post('user', user)
    }
    return savedUser
}

function getEmptyUser() {
    return {
        email: '',
        imgUrl: ''
    }
}



// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()



