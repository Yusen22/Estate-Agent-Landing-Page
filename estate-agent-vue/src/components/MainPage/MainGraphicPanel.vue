<template>
    <div class="flex flex-col h-full items-center graphic-panel bg-stone-500">
        <img :src="img1" class="object-cover" />
        <div class="flex flex-col items-center p-5">
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