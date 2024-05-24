<template>
    <div class="z-15 text-white text-center absolute top-56 right-0 left-0">   
        <h1 class="text-6xl">{{ cardHeader }}</h1>
        <p class="py-10">{{ cardSubtitle }}</p>
        <MyButton :buttonText="cardLinkText"></MyButton>
        
    </div>
</template>

<script>
import MyButton from '../Common/MyButton.vue'

export default {
    name: 'MainCardInfo',
    components: { MyButton },
    data() {
        return {
            cardHeader: 'Find a place you can call a home',
            cardSubtitle: 'With over 2000 properties for rent & sale, our experts will take the trouble out of moving house',
            cardLinkText: 'Get started today'
        }
    }
}




</script>