<template>
  <q-header  class="header-bg shadow-2 text-dark">
    <div class="header-child q-py-lg">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          :icon="activePage?.icon"
          class="header-icon"
        />
        <q-toolbar-title><b>{{activePage?.title}}</b></q-toolbar-title>
        <!-- <q-toolbar-title><b>Dashboard</b></q-toolbar-title> -->

        <!-- header search bar for big screens container -->
        <SearchBar display="searchbar-lg-screens" />

        <!-- Header links -->
        <div class = "q-mx-lg row ">
          <q-btn to="/mentee/notifications" outline round color="primary" icon="notifications" class="header-avatar" />
          <q-btn to="/mentor/profile" class = "q-mx-sm header-avatar" flat round>
            <q-avatar clickable size="45px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
      <!-- <q-toolbar> -->
        <!-- header search bar container -->
        <SearchBar display="searchbar-sm-screens" />
      <!-- </q-toolbar> -->
    </div>
  </q-header>

</template>

<script>
import SearchBar from 'components/SearchBar';
import linksList from 'src/constants/menteeDrawerLinks';

export default {
  name: "HeaderComponent",
  props: ["toggleLeftDrawer", "activeRoute"],
  components: {
    "SearchBar": SearchBar
  },
  data(){
    return {
      activePage: this.setActivePage(),
    }
  },
  methods: {
    setActivePage(){
      let links = linksList;
      let activePage = {};
      links.forEach(element => {
        if(element.activeIndicator === this.activeRoute){
          activePage = element;
        }
      });
      return activePage==={}?null:activePage;
    }
  },
  watch:{
    activeRoute(){
      this.activePage = this.setActivePage();
    }
  }
}

</script>

<style>

</style>
