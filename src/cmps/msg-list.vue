<template>
    <ul class="msg-list">
        <li class="msg-container" v-for="msg in demoMsgs">
            <div class="avatar"></div>
            <span class="user">{{ msg.user }}</span>
            <span class="msg-txt">{{ msg.txt }}</span>
        </li>
    </ul>
</template>

<script>
export default{
    data(){
        return{
            demoMsgs: [
                {
                    user: 'Erez',
                    txt: 'blabla'
                },
                {
                    user: 'Nir',
                    txt: 'blabla'
                },
                {
                    user: 'Miriam',
                    txt: 'blabla'
                },
                {
                    user: 'Avishai',
                    txt: 'blabla'
                },
            ]
        }
    }
}
</script>