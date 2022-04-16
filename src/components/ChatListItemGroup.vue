<template>
  <q-item  v-ripple class="row group-list-item q-pa-md shadow-1 q-mt-md">
    <div class="col-3 row ">
      <q-avatar size="41px" class=""><img src="https://randomuser.me/api/portraits/men/66.jpg"></q-avatar>
      <q-avatar size="41px" class="group-members"><img src="https://randomuser.me/api/portraits/men/67.jpg"></q-avatar>
      <q-avatar size="41px" class="group-members"><img src="https://randomuser.me/api/portraits/women/68.jpg"></q-avatar>
      <q-avatar size="41px" class="group-members"><img src="https://randomuser.me/api/portraits/men/69.jpg"></q-avatar>
    </div>
    <div class="col-7 column ">
      <div class="group-name">HTML AND CSS BEGINNERS</div>
      <div class="last-message">Lorem ipsum dolor sit amet consectetur...</div>
    </div>
    <div class="col-2 column ">
      <div class="time">3:00pm</div>
      <div class="num-msg row justify-center"><div>3</div></div>
    </div>
  </q-item>
</template>
<script>
export default {
  name:"ChatListItemGroup"
}
</script>
<style>

</style>
