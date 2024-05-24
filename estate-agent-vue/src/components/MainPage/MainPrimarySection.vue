<template>
    <div class="w-11/12 mx-auto">
        <MainPageHeader headerText="Unmatched service you can trust" />
    
    </div>
</template>

<script>
import Section from '../Common/Section.vue'

import MainPageHeader from './MainPageHeader.vue'
import MainInfoPanel from './MainInfoPanel.vue'
import MainGraphicPanel from './MainGraphicPanel.vue'

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
                    img1: '/Users/elijahwilsher/GITHUB REPOS/Estate-Agent-Landing-Page/estate-agent-vue/src/assets/estate-agent-desk.jpeg',
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
                    img1: '',
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
                    img1: '',
                },
                {
                    mainText: 'Don`t believe us yet?',
                    subText: 'Check out the hundreds of testimonials from people living in the properties they have always wanted',
                    linkText: '',
                    linkAddress: '',
                    img1: '',
                },

            ]
        }
    }
}

</script>