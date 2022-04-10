<template>
  <q-header  class="header-bg shadow-2 text-dark q-py-md">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggleLeftDrawer"
      >
        <img src = "../assets/headericons/menu-icon.svg"/>
      </q-btn>

      <q-toolbar-title><b>Dashboard</b></q-toolbar-title>

      <!-- header search bar container -->
      <SearchBar />

      <!-- Header links -->
      <div class = "q-mx-lg row ">
        <q-btn outline round color="primary" icon="notifications" class="header-avatar" />
        <q-btn class = "q-mx-sm header-avatar" flat round>
          <q-avatar clickable size="45px">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>

</template>

<script>
import SearchBar from 'components/SearchBar';

export default {
  name: "HeaderComponent",
  props: ["toggleLeftDrawer"],
  components: {
    "SearchBar": SearchBar
  }
}

</script>

<style>

</style>
