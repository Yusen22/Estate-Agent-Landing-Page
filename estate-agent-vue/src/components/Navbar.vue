<template>
  <nav class="flex">
    <div>
      <a>
        <img src="" alt="">
      </a>
    </div>
    <div class="bg-gray-300 w-full">
      <ul class="flex w-full items-center justify-center p-4 space-x-7">
        <li class="hover:text-gray-700" v-for="link in links">
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
      links: [
        {
          name: 'Home',
          href: '1'
        },
        {
          name: 'Properties',
          href: '2'
        },
        {
          name: 'About',
          href: '3'
        },
        {
          name: 'Contact',
          href: '4'
        },
        {
          name: 'Book a viewing',
          href: '5'
        },
      ]
    }
  }
}
</script>


<style scoped></style>
