<template>
  <nav class="flex relative">
    <div class="w-11/12 fixed top-0 left-0 right-0">
      <NavLogo></NavLogo>
      <UserNav></UserNav>
      <NavLinks></NavLinks>
    </div>
    
    
  </nav>
</template>

<script>

import UserNav from '../Navbar/UserNav.vue';
import NavLinks from '../Navbar/NavLinks.vue'
import NavLogo from '../Navbar/NavLogo.vue'

export default {
  components: { UserNav, NavLinks, NavLogo},
  name: 'Navbar',
  data() {
    return {
      
    }
  }
}
</script>


<style scoped></style>
