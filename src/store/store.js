import Vuex from 'vuex'

import { userStore } from './user.store.login.sockets.js'
import { carStore } from './car.store.js'
import { reviewStore } from './review.store.js'
import { messageStore } from './message.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    messageStore,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
