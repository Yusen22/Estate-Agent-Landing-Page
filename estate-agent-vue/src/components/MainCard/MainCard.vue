<template>
        <div class="bg-[url('src/assets/flat-front-with-garden.jpeg')] bg-cover h-[38rem] bg-center hue-rotate-60 brightness-50">
            <div class="h-full w-full bg-"></div>
        </div>
        <MainCardInfo></MainCardInfo>
</template>

<script>
import imageURL from '../../assets/pexels-michal-knotek-164395-542403.jpg'
import MainCardInfo from './MainCardInfo.vue'


export default {
    name: 'MainCard',
    components: { MainCardInfo }
}

</script>