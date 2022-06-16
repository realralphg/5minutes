<template>
  <div class="normal-story" @click="showImage=!showImage">
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
      <!-- Image Dialog -->
      <q-dialog
        v-model="showImage"
        full-width
      >
        <q-img
          :src="data.posts[0]"
          :ratio="16/9"
          class="post-image-1"
          v-ripple
          @click="showImage=!showImage"
        />
      </q-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    name: "StoryComponent",
    props: ["data"],
    data(){
      return{
        showImage: false
      }
    }
  }
</script>
<style>

</style>
