<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import MainCard from './components/MainCard/MainCard.vue';
import MainPrimarySection from './components/MainPage/MainPrimarySection.vue'
import SecondaryCard from './components/SecondCard/SecondaryCard.vue'
import MyButton from './components/Common/MyButton.vue'

import secondCardImg from './assets/house-roof.jpeg'

</script>

<template>
  <div>

    <Navbar :bgColour="scrolled"></Navbar>
    <MainCard></MainCard>
    <MainPrimarySection></MainPrimarySection>
    <SecondaryCard :secondCardImg="secondCardImg"></SecondaryCard>

  </div>
</template>

<script>
export default {
  components: {Navbar, MainCard, MainPrimarySection, SecondaryCard, MyButton},
  data () {
    return {
      scrolled: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    updateScroll() {
      const scroll = window.scrollY
      
      if(scroll > 15) {
        this.scrolled = true
        console.log('true')
      }
      else {
        this.scrolled = false
        console.log('false')
      }
    }
  }
}
</script>

<style scoped>

</style>
