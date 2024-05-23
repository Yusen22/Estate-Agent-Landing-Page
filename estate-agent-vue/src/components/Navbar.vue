<template>
  <nav class="flex">
   
    <div class="w-11/12">
      <NavLogo></NavLogo>
      <UserNav></UserNav>
      <NavLinks></NavLinks>
    </div>
    
    
  </nav>
</template>

<script>

import UserNav from './UserNav.vue';
import NavLinks from './NavLinks.vue'
import NavLogo from './NavLogo.vue'

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
