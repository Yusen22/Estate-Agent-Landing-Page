<template>
    <div :class="`w-full my-10 bg-[url('./assets/house-roof.jpeg')] h-[32rem] bg-bottom bg-cover`">
        <div>
            <h3></h3>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecondaryCard',
    props: ['secondCardImg'],
    data() {
        return {

        }
    }
}
</script>