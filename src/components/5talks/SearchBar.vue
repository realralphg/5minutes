<template>
<!-- 40, 100, 1388-->
<!-- <q-toolbar></q-toolbar> -->
  <div :class="`fivetalks-search-bar ${display} row q-mx-md`">
    <q-btn round flat class="fivetalks-search-button" icon="search" />
    <input class="input" placeholder="Search by Title/Mentor" />
  </div>
</template>
<script>

export default {
  name: "5TalksSearchbarComponent",
  props: ["display"]
}

</script>
<style>

</style>
