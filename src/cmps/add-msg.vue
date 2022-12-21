<template>
    <section class="add-msg">
        <form class="flex column" @submit.stop="saveMsg">
            <input type="text" placeholder="Email" v-model="message.user.email">
            <textarea cols="30" rows="10" placeholder="Message" v-model="message.text"></textarea>
            <button class="call-to-action">SUBMIT</button>
        </form>
    </section>
</template>

<script>
import { imageService } from '../services/image.service.js'

export default{
    data(){
        return {
            message: {
                text: '',
                user:{
                    email: ''
                }
            }
        }
    },
    methods:{
        saveMsg(){
            this.message.createdAt = Date.now()
            this.message.user.imgUrl = imageService.emailToUrl(this.message.user.email)
            this.$store.dispatch({type: 'addMessage', message: this.message})
            this.message = {
                text: '',
                user:{
                    email: ''
                }
            }
        }
    }
}
</script>
