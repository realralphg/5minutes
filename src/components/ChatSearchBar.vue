<template>
  <div :class="`chat-search-bar ${display} row q-my-md`">
    <q-btn round flat class="chat-search-button" icon="search" />
    <input class="input" placeholder="Search messages" />
  </div>
</template>
<script>

export default {
  name: "ChatSearchbarComponent",
  props: ["display"]
}

</script>
<style>

</style>
