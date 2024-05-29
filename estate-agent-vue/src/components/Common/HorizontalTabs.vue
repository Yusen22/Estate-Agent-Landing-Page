<template>
    <div
        class="flex justify-center text-center border-b-2 border-gray-300 min-w-full min-h-min min-w-full mb-4">
        <div 
            v-for="(tab, index) in tabText" 
            class="w-20 h-10" 
            :class="{ 'bg-yellow-500/20 text-black border-b-4 border-yellow-500': activeTab === index, 'cursor-pointer': true }"
            :key="index"
            @click="handleActiveTab(index)"
        >
            <p class="py-1.5">{{ tab }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HorizontalTabs',
    props: {
        tabText: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleActiveTab(index) {
            this.activeTab = index
        }
    },
    data() {
        return {
            activeTab: 0
        }
    }
}


</script>