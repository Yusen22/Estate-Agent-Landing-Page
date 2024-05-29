<template>
        <div class="p-9 absolute flex flex-col items-center justify-center max-w-full max-h-full left-40 bg-yellow-300 shadow-md">
            <img class="size-10 object-center"
                src='/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/1024px-Logo_of_Hong_Kong_Housing_Authority.svg.png'
                alt="">
            <h3 class="absolute font-sans text-xl tracking-widest bottom-0 uppercase font-bold py-1 !text-white">Logans</h3>
        </div>
</template>

<script>
export default {
    name: 'NavLogo',
    data() {
        return {
            imgUrl: '/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/1024px-Logo_of_Hong_Kong_Housing_Authority.svg.png'
        }
    }
}
</script>