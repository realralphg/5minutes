<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="$router.currentRoute.value.path === '/profile' ||  $router.currentRoute.value.path === '/chat' ||  $router.currentRoute.value.path === '/mentor' || $router.currentRoute.value.path === '/'  " class="footer-tabs bg-primary q-pa-sm text-white">
      <q-tabs align="center">
        <q-route-tab class="non q-mx-xl" to="/" style="font-size:1rem" label="Home" />
        <q-route-tab class="non q-mx-xl" to="/" ><i style="font-size:1rem" class="ri-restaurant-line"></i></q-route-tab>
        <q-route-tab class=" non q-mx-xl" to="/chat" ><i style="font-size:1rem" class="ri-heart-line"></i></q-route-tab>
        <q-route-tab class="non q-mx-xl" to="/profile" ><i style="font-size:1rem" class="ri-user-line"></i></q-route-tab>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
@media(max-width: 500px){
  
  .non{
    margin: 0 !important;
  }
}
</style>