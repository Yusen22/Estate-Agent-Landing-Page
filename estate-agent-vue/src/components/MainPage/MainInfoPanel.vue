<template>
    <div class="info-panel text-center flex flex-col items-center p-6">
        <h3 class="text-2xl uppercase">{{ mainText }}</h3>
        <p>{{ subText }}</p>
        <a href="{{ linkAddress }}">{{ linkText }}</a>
    </div>
</template>

<script>
    export default {
        name: 'MainInfoPanel',
        props: ['mainText', 'subText', 'linkText', 'linkAddress']
    }

</script>