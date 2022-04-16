<template>
<!-- 40, 100, 1388-->
<!-- <q-toolbar></q-toolbar> -->
  <div :class="`search-bar ${display} row q-mx-md`">
    <q-btn round flat class="search-button" icon="search" />
    <input class="input" placeholder="Search for your favourite Mentor" />
    <q-separator vertical class="separator"/>
    <q-btn round flat class="text-primary filter-button" icon="filter_list" />
  </div>
</template>
<script>

export default {
  name: "SearchbarComponent",
  props: ["display"]
}

</script>
<style>

</style>
