<template>
    <nav class="flex">
      <div class="w-full">
        <ul class="flex items-start justify-end space-x-3 p-4">
          <li class="flex w-1/12 items-center justify-end text-sm text-nowrap" v-for="link in userLinks">
            <a href="{{ link.href }}">{{ link.name }}</a>
            <component :is=link.icon class="ml-2 w-2/12"></component>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import {UserCircleIcon, Cog8ToothIcon, MagnifyingGlassCircleIcon} from '@heroicons/vue/24/solid';


  export default {
    name: 'Navbar',
    components: {UserCircleIcon, Cog8ToothIcon, MagnifyingGlassCircleIcon},
    data() {
      return {
        userLinks: [
          {
            name: 'My Account',
            href: '1',
            icon: 'UserCircleIcon'
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
          }
        ]
      }
    }
  }
  </script>
  
  
  <style scoped></style>
  