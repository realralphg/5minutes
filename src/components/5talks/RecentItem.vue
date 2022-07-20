<template>
  <div class="recent-item">
    <div class="media column justify-center">
      <div class="column">
        <q-item round class="row justify-center overlay" >
          <div class="column justify-center">
            <q-btn to="/mentee/5-talks/watch" size="xl" round color="primary" flat icon="play_circle_filled" />
          </div>
        </q-item>
      </div>
      <q-img class="media-item" src="../../assets/vid_frame.png" />
    </div>
    <div class="row">
      <div class="col-8 column">
        <div class="text-bold">
          Design Matters
        </div>
        <div class="text-muted text-bold">
          Brene Brown
        </div>
        <div class="text-xs">
          Posted 11 May, 2022
        </div>
      </div>
      <div class="col-4 column justify-center">
        <div class="row justify-between q-px-xs">
          <q-btn round dense flat class="text-sm" icon="bookmark_border" />
          <q-btn round dense flat class="text-sm" icon="download" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'RecentItemComponent'
}
</script>

