<template>
<main class="app-container flex column ">
    <add-msg />
    <msg-list />
</main>
</template>

<script>
import addMsg from '../cmps/add-msg.vue'
import msgList from '../cmps/msg-list.vue'
export default{
    components:{
        addMsg,
        msgList,
    }
}
</script>