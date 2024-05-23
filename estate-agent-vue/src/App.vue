<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import MainCard from './components/MainCard/MainCard.vue';

</script>

<template>
  <div>

    <Navbar></Navbar>
    <MainCard></MainCard>

  </div>
</template>

<script>
export default {
  components: {Navbar, MainCard}
}
</script>

<style scoped>

</style>
