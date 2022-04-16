<template>
  <q-item  v-ripple class="row space-between group-list-item q-pa-md shadow-1 q-mt-md">
    <div class="col-2 row justify-center ">
      <q-avatar size="41px" class=""><img src="https://randomuser.me/api/portraits/men/66.jpg"></q-avatar>
    </div>
    <div class="col-8 column">
      <div class="group-name">James Cartino</div>
      <div class="last-message">Lorem ipsum dolor sit amet consectetur...</div>
    </div>
    <div class="col-2 column ">
      <div class="time">3:00pm</div>
      <div class="num-msg row justify-center"><div>1</div></div>
    </div>
  </q-item>
</template>
<script>import ChatListItemGroupVue from "./ChatListItemGroup.vue";

  export default {
    name: "ChatListItemUser"
  }
</script>
<style>

</style>
