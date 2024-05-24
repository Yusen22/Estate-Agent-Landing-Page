<template>
    <div class="hbg-[url({{img1}})]" >
        <img src="{{ img2 }}">
        <h3>{{ mainText }}</h3>
        <p>{{ subText }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MainGraphicPanel',
        props: ['img1', 'img2', 'mainText', 'subText'],
        
    }

</script>