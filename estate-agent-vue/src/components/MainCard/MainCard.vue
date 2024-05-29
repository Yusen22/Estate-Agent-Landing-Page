<template>
    <div
        class="bg-[url('src/assets/flat-front-with-garden.jpeg')] bg-cover h-[47rem] bg-center hue-rotate-60 brightness-75">
    </div>
    <div class="absolute top-60 right-0 left-0 flex flex-col items-center">
        <MainCardInfo></MainCardInfo>
        <SearchBox :tabTextMaster='primSearchTabText' :searchInfo="this.searchInfo"></SearchBox>
    </div>
</template>

<script>
import MainCardInfo from './MainCardInfo.vue'
import SearchBox from '../Common/SearchBox.vue'


export default {
    name: 'MainCard',
    components: { MainCardInfo, SearchBox },
    data() {
        return {
            primSearchTabText: ['For sale', 'For rent', 'To sell'],
            searchInfo: [
                {
                    labelText: 'Search area',
                    type: 'text',
                    placeholder: 'e.g. London, New York, Phnom Penh'
                },
                {
                    labelText: 'Budget',
                    type: 'range',
                    placeholder: ''
                },
            ]
        }
    }
}

</script>