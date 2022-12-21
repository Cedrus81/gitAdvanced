<template>
    <ul class="msg-list">
        <li class="msg-container flex" v-for="msg in msgs">
            <div class="avatar"><img :src="msg.user.imgUrl" alt=""></div>
            <div class="msg-content flex">
            <span class="user">{{ msg.user.email }}</span>
            <span class="msg-txt">{{ msg.text }}</span>
                  </div>

        </li>
    </ul>
</template>

<script>
// import { imageService } from '../services/image.service.js'

export default{
    created() {
        console.log(this.msgs)
    },
    computed: {
        msgs(){
            return this.$store.getters.messages
        }
    },
    // methods: {
    //     getImage(user){
    //         return imageService.emailToUrl(user)
    //     }
    // },
    
}
</script>
