<template>
    <div class="info-panel h-full text-center flex flex-col justify-around items-center p-6">
        <h3 class="text-6xl uppercase">{{ mainText }}</h3>
        <p class="p-8">{{ subText }}</p>
        <a class="text-red-600 font-bold uppercase" href="{{ linkAddress }}">{{ linkText }}</a>
    </div>
</template>

<script>
    export default {
        name: 'MainInfoPanel',
        props: ['mainText', 'subText', 'linkText', 'linkAddress']
    }

</script>