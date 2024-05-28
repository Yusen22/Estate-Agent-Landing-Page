<template>
    <div class="absolute">
    <div class='relative h-[4rem] w-[4rem]'>
        <div class="p-7 absolute min-w-full min-h-full left-40 bg-yellow-300 shadow-md">
            <img class=""
                src='/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/1024px-Logo_of_Hong_Kong_Housing_Authority.svg.png'
                alt="">
        </div>
    </div>
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