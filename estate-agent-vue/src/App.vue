<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import MainCard from './components/MainCard/MainCard.vue';
import MainPrimarySection from './components/MainPage/MainPrimarySection.vue'
import MyButton from './components/Common/MyButton.vue'

</script>

<template>
  <div>

    <Navbar></Navbar>
    <MainCard></MainCard>
    <MainPrimarySection></MainPrimarySection>

  </div>
</template>

<script>
export default {
  components: {Navbar, MainCard, MainPrimarySection, MyButton}
}
</script>

<style scoped>

</style>
