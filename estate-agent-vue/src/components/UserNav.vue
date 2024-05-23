<template>
    <nav class="flex absolute right-52 top-1">
      <div class="w-full min-w-full">
        <ul class="flex items-start justify-end space-x-9 p-4 absolute">
          <li class="text-sm text-nowrap" v-for="link in userLinks">
            <a href="{{ link.href }}">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        userLinks: [
          {
            name: 'My Account',
            href: '1'
          },
          {
            name: 'Search',
            href: '2'
          },
        ]
      }
    }
  }
  </script>
  
  
  <style scoped></style>
  