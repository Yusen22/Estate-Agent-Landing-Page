<template>
    <div class="flex flex-col justify-center z-15 w-1/3 h-full bg-white rounded-xl">
        <HorizontalTabs :tabText="tabTextMaster"></HorizontalTabs>
        <div class="min-w-full space-y-6 px-5">
            <div v-for="(search, index) in searchInfo" class="flex flex-col space-y-1" :key="index">
                <label class="flex justify-between" :class="{ 'mb-1': searchInfo[index].type === 'range' }">{{ searchInfo[index].labelText }}
                    <div v-show="searchInfo[index].type === 'range'">
                        <p> $ {{ calcCostSale(salePrice) }}</p>
                    </div>
                </label>
                <input 
                    v-if="searchInfo[index].type === 'range'"
                    v-model="salePrice" class="rounded-md w-full border-0 px-0 py-0"
                    :type="searchInfo[index].type" :placeholder="searchInfo[index].placeholder"
                    @input="handleRangeValue" min="2" value="2" :list="rangeList"
                >
                <input 
                    v-else
                    class="rounded-md w-full border-gray-400 border-2 px-3 py-1"
                    :type="searchInfo[index].type" :placeholder="searchInfo[index].placeholder"
                    @input="handleRangeValue"
                >
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
    props: {
        tabTextMaster: {
            type: Array,
            required: true
        },

        searchInfo: {
            type: Object,
            required: true
        },
        rangeList: {
            type: String
        }
    },
    data() {
        return {
            salePrice: 0,
            sliderValue: 1,
            newSliderValue: 1
        };
    },
    methods: {
        handleRangeValue(event) {
            const rangeVal = event.target.value;
            this.sliderValue = rangeVal;
        },

        calcCostSale(sliderValue) {
            

            if (sliderValue <= 60) {
                this.newSliderValue = sliderValue / 4
            } else if (sliderValue > 60 && sliderValue <= 75) {
                this.newSliderValue = sliderValue / 3
            } else if (sliderValue > 75 && sliderValue <= 85) {
                this.newSliderValue = sliderValue / 2
            } else if (sliderValue > 85 && sliderValue <= 95) {
                this.newSliderValue = sliderValue / 1.5
            } else {
                this.newSliderValue = sliderValue
            }

            const sliderCost = Number((this.newSliderValue * 20000).toPrecision(2))

            // shortenNums(sliderCost)

            return sliderCost
        },

        // shortenNums (value) {
        //     if(value >= )
        // }
    },
    watch: {
        sliderValue(newValue) {
            this.salePrice = newValue;
        }
    }
}

</script>

<style>
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    border-radius: 16px;

}

input[type="range"]::-webkit-slider-runnable-track {
    background: grey;
    height: 16px;
    border: none !important;
    border-radius: 16px;

}

/******** Firefox ********/
input[type="range"]::-moz-range-track {
    background: #efeb29;
    height: 0.5rem;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    background-color: white;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 3px solid #e7df50;
    box-shadow: -407px 0 0 400px #e7df50;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
    /*  ...  */
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px #e7df50;
}
</style>