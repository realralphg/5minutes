<template>
  <div class="my-story column space-between q-pa-xs">
    <div class="row justify-center q-mb-sm">
      <q-btn round>
        <q-avatar size="85px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
      </q-btn>
    </div>
    <div class="row justify-center">
      <div class="btn-container column">
        <q-btn flat class="row add-story">
          <q-icon name="add" round color="primary" />
          <span>Create story</span>
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MyStoryComponent",
    props: ["avatar"]
  }
</script>
<style>

</style>
