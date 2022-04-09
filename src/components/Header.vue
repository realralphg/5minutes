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
      <div class="search-bar">

      </div>
    </q-toolbar>
  </q-header>

</template>

<script>

export default {
  name: "HeaderComponent",
  props: ["toggleLeftDrawer"]
}

</script>

<style>

</style>
