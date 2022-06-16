<template>
  <div class="fivetalks-post-item column q-my-md">
    <div class="media column justify-center">
      <div class="column">
        <q-item round class="row justify-center overlay " >
          <div class="column justify-center">
            <q-btn to="/mentee/5-talks/watch" size="xl" round color="primary" flat icon="play_circle_filled" />
          </div>
        </q-item>
      </div>
      <q-img class="media-item" src="../../assets/vid_frame.png" />
    </div>
    <div class="row border-bottom q-pb-md">
      <div class="column col-md-6 col-sm-12 post-title q-my-sm">
        <div class="text-bold text-lg title">
          Chipp the Kid
        </div>
        <div class="text-md desc">
          Designing books is no laughing matter. Ok, it is.
        </div>
      </div>
      <div class="row col-md-6 col-sm-12 justify-between">
        <div class="column justify-center">
          <q-btn class="text-sm" icon="thumb_up_off_alt" label="Like (200)" dense no-caps flat />
        </div>
        <div class="column justify-center">
          <q-btn class="text-sm" icon="reply" label="Share (12)" dense no-caps flat />
        </div>
        <div class="column justify-center">
          <q-btn class="text-sm" icon="playlist_add" label="Add to playlist" dense no-caps flat />
        </div>
      </div>
    </div>
    <div class="row q-pt-md">
      <q-item v-ripple clickable @click="showAbout=!showAbout" class="text-bold cursor-pointer">
        About the speaker
      </q-item>
      <p class="text-md q-my-sm about-speaker" :style="`height: ${showAbout?'auto':'0px'}`">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet reiciendis expedita cum quidem aut nobis mollitia repellendus cumque nulla laboriosam ipsum doloremque iusto, maiores cupiditate hic veniam consequuntur? Similique molestias mollitia laudantium, eos neque sequi ea placeat deserunt necessitatibus sed.
      </p>
    </div>

  </div>
</template>
<script>

export default {
  name: "5TalksPostItemComponent",
  data(){
    return{
      showAbout: false
    }
  }
}
</script>
