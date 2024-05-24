<template>
    <div class="p-6 flex flex-col items-center">
        <img :src="imageProps" class="bg-cover" />
        <div class="flex flex-col items-center">
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
            imageProps: {
                backgroundImage: "url('../')"
            }
        }
    }

}

</script>