export const usersArray = [
    {
        _id: '123',
        email: 'user1@email.com',
        imgUrl: 'https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/64.jpg'
    },
    {
        _id: '456',
        email: 'user2@email.com',
        imgUrl: 'https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg',
    },
    {
        _id: '789',
        email: 'user3@email.com',
        imgUrl: 'https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/10.jpg',
    },
]

export const msgsArray = [
    {
        _id: '001',
        user: {
            _id: '123',
            email: 'user1@email.com',
            imgUrl: 'https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/64.jpg'
        },
        text: 'Hey! How are you?'
    },
    {
        _id: '002',
        user: {
            _id: '789',
            email: 'user3@email.com',
            imgUrl: 'https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/10.jpg'
        },
        text: 'All good!'
    },
    {
        _id: '003',
        user: {
            _id: '456',
            email: 'user2@email.com',
            imgUrl: 'https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg'
        },
        text: 'Have a nice life!'
    },
]