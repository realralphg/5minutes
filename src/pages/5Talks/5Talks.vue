<template>
  <div class="row justify-between five-talks-body">
    <div class="col-md-8 col-sm-12 col-xs-12 cols bg-5talks">
      <div class="row q-pa-md">
        <q-space />
        <q-btn icon="menu" round dense flat color="primary" />
      </div>
      <div class="row justify-center">
        <div class="text-primary row">
          <div class="column justify-center q-mx-xs">
            <q-icon name="mic" class="text-lg " color="primary" />
          </div>
          <div class="text-lg text-bold ">5Talks</div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="text-white row justify-center text-center col-9 text-md">
          A plethora of inspiring and educating 5 minutes video collection from mentors around the world that is guaranteed to change your life.
        </div>
      </div>
      <div class="row justify-center q-my-md">
        <div class="col-9">
          <div class="column">
            <search-bar></search-bar>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-11 row">
          <q-item dense clickable v-ripple v-for="category in categories" :key="category.name" :class="`column justify-center text-bold q-mx-xs q-my-xs q-px-md text-md ${category.active?'cat-active':'cat'}`">{{category.name}}</q-item>
        </div>
      </div>
      <div class="row justify-center">
        <div class='col-11'>
          <div class="column">
            <post-item />
            <post-item />
            <post-item />
          </div>
        </div>
      </div>
      <div class="column q-mb-lg">
        <div class="row justify-center">
          <div class="col-11 row">
            <div class="text-bold">Recent</div>
            <q-space />
            <div class="text-bold">
              <q-btn label="View all" flat rounded class="text-sm text-bold q-px-lg" dense color="primary"  />
            </div>
          </div>
        </div>
        <div class="row q-px-lg recent-container justify-between">
          <recent-item />
          <recent-item />
          <recent-item />
        </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-12 col-xs-12 cols">
      <sidebar />
    </div>
  </div>
</template>
<script>
import SearchBar from "src/components/5Talks/SearchBar.vue";
import PostItem from 'src/components/5talks/PostItem.vue';
import RecentItem from "src/components/5talks/RecentItem.vue";
import Sidebar from "src/components/sidebars/Sidebar5Talks.vue";

export default {
  name: "5TalksPage",
  components: {
    SearchBar, PostItem, RecentItem, Sidebar
  },
  data(){
    return {
      categories: [
        {
          name: "All",
          active: true
        },
        {
          name: "Agriculture",
          active: false
        },
        {
          name: "Creative",
          active: false
        },
        {
          name: "Entrepreneur",
          active: false
        },
        {
          name: "Finance",
          active: false
        },
        {
          name: "Technology",
          active: false
        },
      ]
    }
  }
}
</script>
