<template>
  <div class="normal-story">
    <div class="overlay column">
      <q-avatar size="28px" class="avatar">
        <img :src="data.avatar">
      </q-avatar>
      <q-space />
      <div class="name">
        <div class="name-text ">
          {{data.name}}
        </div>
      </div>
    </div>
    <div class="underimage">
      <img :src="data.posts[0]" />
    </div>
  </div>
</template>
<script>
  export default {
    name: "StoryComponent",
    props: ["data"]
  }
</script>
<style>

</style>
