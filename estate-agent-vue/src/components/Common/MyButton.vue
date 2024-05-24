<template>
    <button class="rounded-lg bg-yellow-400 p-5 shadow-lg">
        {{ buttonText }}
    </button>
</template>

<script>
    export default {
        name: 'MyButton',
        props: ['buttonText']
    }
</script>