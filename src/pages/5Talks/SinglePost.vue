<template>
  <div class="row justify-between five-talks-body">
    <div class="col-md-8 col-sm-12 col-xs-12 cols bg-5talks">
      <div class="row q-pa-md">
        <q-btn @click="$router.go(-1)" size="sm" color="primary" flat icon="arrow_back" label="Back" />
      </div>
      <div class="row justify-center">
        <div class='col-11'>
          <div class="column">
            <div class="fivetalks-post-item column q-my-md">
              <div class="media-single column justify-center" :style="{height: `${vidHeight}px`}">
                <!-- <div class="column">
                  <q-item round class="row justify-center overlay " >
                    <div class="column justify-center">
                      <q-btn size="xl" round color="primary" flat icon="play_circle_filled" />
                    </div>
                  </q-item>
                </div> -->
                <video class="media-item" :autoplay="false" controls >
                  <source src="../../assets/vid/vid.mp4" type="video/mp4">
                </video>
                <!-- <q-media-player
                  class="media-item"
                  type="video"
                  :sources="sources"
                /> -->
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
              <div class="column q-pt-md">
                <q-item class="text-bold">
                  About the speaker
                </q-item>
                <p class="text-md q-my-sm q-mx-md about-speaker">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet reiciendis expedita cum quidem aut nobis mollitia repellendus cumque nulla laboriosam ipsum doloremque iusto, maiores cupiditate hic veniam consequuntur? Similique molestias mollitia laudantium, eos neque sequi ea placeat deserunt necessitatibus sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-12 col-xs-12 cols">
      <sidebar />
    </div>
  </div>
</template>
<script>
import Sidebar from "src/components/sidebars/Sidebar5Talks.vue";
// import QMediaPlayer from '@quasar/qmediaplayer';

export default {
  name:'SinglePostPage',
  components: {
    Sidebar,
    // QMediaPlayer
  },
  data() {
    return {
      vidHeight: 500, // Gotten from the loaded video file
      vidWidth: 800,
      sources: [
        {
          src: '../../assets/vid/vid.mp4',
          type: 'video/mp4'
        }
      ]
    }
  }
}
</script>
