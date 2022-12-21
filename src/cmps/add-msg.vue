<template>
    <section class="add-msg">
        <form class="flex column">
            <input type="text" placeholder="Email" v-model="msg.email">
            <textarea cols="30" rows="10" placeholder="Message" v-model="msg.txt"></textarea>
            <button class="call-to-action">SUBMIT</button>
        </form>
    </section>
</template>

<script>
export default{
    data(){
        return {
            msg: {
                txt: '',
                email: ''
            }
        }
    }
}
</script>