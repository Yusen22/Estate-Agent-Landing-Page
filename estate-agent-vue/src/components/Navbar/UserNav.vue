<template>

      <ul class="flex items-start justify-end space-x-1 my-4 transition">
        <li v-for="(link, index) in userLinks" :key="index" :class="[
          'flex w-1/12 items-center justify-center text-sm text-nowrap px-2',
          { 'border-r': index !== userLinks.length - 1 },
          { 'border-black': isScrolled }
        ]">
          <a href="{{ link.href }}">{{ link.name }}</a>
          <component :is=link.icon class="ml-2 w-4"></component>
        </li>
      </ul>
</template>

<script>
import { UserCircleIcon, Cog8ToothIcon, MagnifyingGlassCircleIcon } from '@heroicons/vue/24/solid';


export default {
  name: 'Navbar',
  components: { UserCircleIcon, Cog8ToothIcon, MagnifyingGlassCircleIcon },
  props: {
    isScrolled: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userLinks: [
        {
          name: 'My Account',
          href: '1',
        },
        {
          name: 'Settings',
          href: '2',
          icon: 'Cog8ToothIcon'
        },
        {
          name: 'Search',
          href: '3',
          icon: 'MagnifyingGlassCircleIcon'
        },
      ],
    }
  }, 
}
</script>


<style scoped></style>