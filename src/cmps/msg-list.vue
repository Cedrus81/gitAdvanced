<template>
    <ul class="msg-list">
        <li class="msg-container" v-for="msg in msgs">
            user: {{ msg.txt }}
        </li>
    </ul>
</template>

<script>
export default{
    data(){
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
</script>