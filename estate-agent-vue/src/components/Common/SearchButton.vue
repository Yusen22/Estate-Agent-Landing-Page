<template>
    <button class="rounded-md flex items-center bg-yellow-400 py-1 px-3 mb-3 shadow-sm">
        <p class="text-white text-sm uppercase tracking-wide font-bold align-middle">Search</p>
        <MagnifyingGlassCircleIcon class="w-4 ml-1 py-1 text-white"/>
    </button>
</template>

<script>
import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/solid';

    export default {
        name: 'SearchButton',
        components: {MagnifyingGlassCircleIcon}
    }
</script>