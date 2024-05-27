<template>
    <div class="flex flex-col h-full items-center justify-between graphic-panel bg-stone-700">
        <div class="relative">
            <img :src="img1" class="h-[27rem] object-fill" />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-700 via-transparent to-transparent z-4"></div>
        </div>
        <div class="flex flex-col items-center justify-end p-5 mb-5 h-32 text-white">
            <h3 class="text-2xl uppercase text center">{{ mainText }}</h3>
            <p class="text-center">{{ subText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainGraphicPanel',
    props: ['img1', 'mainText', 'subText'],
    data() {
        return {
        }
    }

}

</script>