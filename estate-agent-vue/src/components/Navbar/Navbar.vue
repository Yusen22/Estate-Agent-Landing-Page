<template>
  <nav class="flex relative z-10">
    <div @scroll="handleScroll" :class="bgColour ? 'bg-white text-black': ''" class=" fixed top-0 left-0 right-0 text-white drop-shadow-md">
      <NavLogo></NavLogo>
      <UserNav></UserNav>
      <NavLinks></NavLinks>
    </div>
    
    
  </nav>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import UserNav from '../Navbar/UserNav.vue';
import NavLinks from '../Navbar/NavLinks.vue'
import NavLogo from '../Navbar/NavLogo.vue'



export default {
  components: { UserNav, NavLinks, NavLogo},
  name: 'Navbar',
  data() {
    return {
      scrolled: false
    }
  },
  props: ['bgColour'],
  methods: {
    handleScroll() {
      
        console.log('ye')
    }
  }
}


</script>


<style scoped></style>
