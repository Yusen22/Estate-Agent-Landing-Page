<template>
    <div class="relative bg-transparent w-full">
        <ul class="flex items-end justify-end pr-4 py-3 space-x-24">
            <li class="text-[1.4rem] uppercase font-sans shadow-2xl hover:text-gray-700" v-for="link in links">
                <a class="tracking-wider font-bold" href="{{ link.href }}">{{ link.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavLinks',
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
