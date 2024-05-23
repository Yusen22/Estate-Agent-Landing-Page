<template>
  <nav class="flex">
    <div>
      <a>
        <img src="" alt="">
      </a>
    </div>
    <div>
      <UserNav></UserNav>
      <NavLinks></NavLinks>
    </div>
    
    
  </nav>
</template>

<script>

import UserNav from './UserNav.vue';
import NavLinks from './NavLinks.vue'

export default {
  components: { UserNav, NavLinks },
  name: 'Navbar',
  data() {
    return {
      
    }
  }
}
</script>


<style scoped></style>
