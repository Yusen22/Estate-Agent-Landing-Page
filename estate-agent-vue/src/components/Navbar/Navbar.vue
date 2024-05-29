<template>
  <nav class="flex relative z-10">
    <div :class="bgColour ? 'bg-white !text-black drop-shadow-md' : ''"
      class="fixed transition top-0 left-0 right-0 text-white px-28">
      <NavLogo ></NavLogo>
      <UserNav :isScrolled="bgColour"></UserNav>
      <NavLinks class="drop-shadow-md"></NavLinks>
    </div>
  </nav>
</template>

<script>

import UserNav from '../Navbar/UserNav.vue';
import NavLinks from '../Navbar/NavLinks.vue'
import NavLogo from '../Navbar/NavLogo.vue'



export default {
  components: { UserNav, NavLinks, NavLogo },
  name: 'Navbar',
  data() {
    return {
  
    }
  },
  props: ['bgColour'],
}


</script>


<style scoped></style>
