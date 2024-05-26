<template>
    <div class="w-10/12 mx-auto">
        <MainPageHeader headerText="Unmatched service you can trust" />
        <div class="card-panel flex flex-col grid grid-cols-2 grid-rows-3 grid-flow-col gap-8">
            <div v-for="(panel, index) in panelInfo" :key="index">
                <template v-if="index % 2 === 0">
                    <MainGraphicPanel :mainText="panel.mainText" :subText="panel.subText" :img1="panel.img1" />
                </template>
                <template v-else>
                    <MainInfoPanel :mainText="panel.mainText" :subText="panel.subText" :linkText="panel.linkText"
                        :linkAddress="panel.linkAddress" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Section from '../Common/Section.vue'

import MainPageHeader from './MainPageHeader.vue'
import MainInfoPanel from './MainInfoPanel.vue'
import MainGraphicPanel from './MainGraphicPanel.vue'

import image1 from '/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/estate-agent-desk.jpeg'
import image2 from '/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/award-office.jpeg'
import image3 from '/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/crs-cert.png'

export default {
    name: 'MainPrimarySection',
    components: { Section, MainPageHeader, MainInfoPanel, MainGraphicPanel },
    data() {
        return {
            panelInfo: [
                {
                    mainText: '25 years expertise',
                    subText: 'We pride ourselves on our long-standing, quality service to homeowners everywhere. Get in touch today to find out why.',
                    linkText: '',
                    linkAddress: '',
                    img1: image1,
                },
                {
                    mainText: 'Always on hand to help',
                    subText: 'Whether you`re in need of a new home, somewhere to rent, or to sell your existing property, our experts are on hand 7 days a week to make the process as smooth as possible. ',
                    linkText: 'Speak to one of our agents now',
                    linkAddress: '',
                    img1: '',
                },
                {
                    mainText: 'Award-winning service',
                    subText: 'We appreciate being recognised for our work, picking up winners of National Estate Agent Awards 2022 & 2024',
                    linkText: '',
                    linkAddress: '',
                    img1: image2,
                },
                {
                    mainText: 'Not sure what to look for?',
                    subText: 'Filter properties based on your preferences, and find somewhere thst is just to your taste',
                    linkText: 'Search properties now',
                    linkAddress: '',
                    img1: '',
                },
                {
                    mainText: 'Fully-accredited for peace of mind',
                    subText: 'Our staff are fully CRS & CSB accredited, so you can trust the advice on such a big decision',
                    linkText: '',
                    linkAddress: '',
                    img1: image3,
                },
                {
                    mainText: 'Don`t believe us yet?',
                    subText: 'Check out the hundreds of testimonials from people living in the properties they have always wanted',
                    linkText: 'Take me to testimonials',
                    linkAddress: '',
                    img1: '',
                },

            ]
        }
    }
}

</script>