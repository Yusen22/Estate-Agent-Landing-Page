<template>
    <div class="flex flex-col justify-center z-15 w-1/4 h-full bg-white rounded-xl">
        <HorizontalTabs :tabText="tabTextMaster"></HorizontalTabs>
        <div class="min-w-full space-y-4 px-5">
            <div class="flex flex-col space-y-1">
                <label>Search Area</label>
                <input class="rounded-md border-gray-400 border-2 w-full" type="text">
            </div>
            <div class="flex flex-col space-y-1">
                <label>Budget</label>
                <input class="rounded-md border-gray-400 border-2 w-full" type="text">
            </div>
            <div class="flex justify-end">
                <SearchButton></SearchButton>
            </div>
        </div>

    </div>
</template>

<script>
import HorizontalTabs from './HorizontalTabs.vue'
import SearchButton from './SearchButton.vue'


export default {
    name: 'SearchBox',
    components: { HorizontalTabs, SearchButton },
    props: ['tabTextMaster'],
    data() {
        return {
            
        }
    }
}


</script>