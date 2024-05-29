<template>
    <div class="z-15 text-white h-full text-center">   
        <h1 class="text-6xl font-urbanist tracking-wide">{{ cardHeader }}</h1>
        <p class="py-10 text-md">{{ cardSubtitle }}</p>
        <!-- <MyButton :buttonText="cardLinkText"></MyButton> -->
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
            cardSubtitle: 'With thousands of properties for rent & sale, our experts will take the trouble out of moving house',
            cardLinkText: 'Get started today'
        }
    }
}




</script>