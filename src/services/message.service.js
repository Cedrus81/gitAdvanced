import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const STORAGE_KEY = 'messages'

export const messageService = {
    query,
    getById,
    save,
    remove,
    getEmptyMessage,
}
window.cs = messageService

async function query(filterBy = { txt: '' }) {
    var messages = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        messages = messages.filter(message => regex.test(message.user.email) || regex.test(message.text))
    }
    return messages
    // return httpService.get(STORAGE_KEY, filterBy)
}

async function getById(messageId) {
    return storageService.get(STORAGE_KEY, messageId)
    // return httpService.get(`message/${messageId}`)
}
function remove(messageId) {
    return storageService.remove('message', messageId)
    // return httpService.delete(`message/${messageId}`)
}

async function save(message) {
    var savedMessage
    if (message._id) {
        // savedMessage = await storageService.put(STORAGE_KEY, message)
        savedMessage = await httpService.put(`message/${message._id}`, message)
    } else {
        // savedMessage = await storageService.post(STORAGE_KEY, message)
        savedMessage = await httpService.post('message', message)
    }
    return savedMessage
}

function getEmptyMessage() {
    return {
        user: {
            _id: '456',
            email: '',
            imgUrl: ''
        },
        text: ''
    }
}



// ;(async ()=>{
//     await messageService.signup({fullname: 'Puki Norma', messagename: 'puki', password:'123',score: 10000, isAdmin: false})
//     await messageService.signup({fullname: 'Master Adminov', messagename: 'admin', password:'123', score: 10000, isAdmin: true})
//     await messageService.signup({fullname: 'Muki G', messagename: 'muki', password:'123', score: 10000})
// })()



