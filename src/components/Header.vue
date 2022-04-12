<template>
  <q-header  class="header-bg shadow-2 text-dark">
    <div class="header-child q-py-lg">
      <q-toolbar>
        <q-btn
        flat
        dense
        round
        @click="toggleLeftDrawer"
        :icon="'dashboard'"
        class="header-icon"
      />
        <!-- ! DON'T FORGET!!! :icon="activePage?.icon" -->

        <!-- <q-toolbar-title><b>{{activePage?.title}}</b></q-toolbar-title> -->
        <q-toolbar-title><b>Dashboard</b></q-toolbar-title>

        <!-- header search bar container -->
        <SearchBar />

        <!-- Header links -->
        <div class = "q-mx-lg row ">
          <q-btn outline round color="primary" icon="notifications" class="header-avatar" />
          <q-btn class = "q-mx-sm header-avatar" flat round>
            <q-avatar clickable size="45px">
              <img src="https://randomuser.me/api/portraits/men/63.jpg">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </div>
  </q-header>

</template>

<script>
import SearchBar from 'components/SearchBar';

export default {
  name: "HeaderComponent",
  props: ["toggleLeftDrawer", "activeRoute"],
  components: {
    "SearchBar": SearchBar
  },
  data(){
    return {
      activePage: {}
    }
  },
  mounted(){
    this.activePage = this.setActivePage();
  },
  methods: {
    setActivePage(){
      let links = this.$store.getters['appstore/getDrawerLinks'];
      let activePage = {};
      console.log(this.activeRoute);
      console.log(links);
      links.forEach(element => {
        console.log(element.activeIndicator);
        console.log(this.activeRoute);
        if(element.activeIndicator === this.activeRoute){
          activePage = element;
        }
      });
      console.log(this.activePage);
      return activePage==={}?null:activePage;
    }
  }
}

</script>

<style>

</style>
