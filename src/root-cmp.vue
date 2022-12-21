<template>
  <!-- <section> -->
    <!-- <user-msg/> -->
    <!-- <app-header /> -->
    <!-- <router-view/> -->
  <!-- </section> -->
  <thats-app />
</template>

<script>


import { store } from './store/store'
// import appHeader from './cmps/app-header.vue'
// import userMsg from './cmps/user-msg.vue'
// import { userService } from './services/user.service'
import thatsApp from './views/thats-app.vue'

export default {

  created() {
    
    // console.log('Vue App created')
    // const user = userService.getLoggedinUser()
    // if (user)  store.commit({type: 'setLoggedinUser', user})
  },
  components: {
    // appHeader,
    // userMsg
    thatsApp
  },
}
</script>