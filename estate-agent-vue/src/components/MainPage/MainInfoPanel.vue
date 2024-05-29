<template>
    <div class="info-panel h-full text-center flex flex-col justify-around items-center p-6 bg-white">
        <h3 class="text-6xl uppercase">{{ mainText }}</h3>
        <p class="p-8">{{ subText }}</p>
        <div class="flex relative">
            <a class="relative right-[-2%] flex text-red-600 font-bold uppercase" href="{{ linkAddress }}">{{ linkText }}
                <PaperAirplaneIcon class=" w-4 ml-2 left-56"></PaperAirplaneIcon>
            </a>
            
        </div>
    </div>
</template>

<script>
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid';



export default {
    name: 'MainInfoPanel',
    props: ['mainText', 'subText', 'linkText', 'linkAddress'],
    components: { PaperAirplaneIcon }
}

</script>