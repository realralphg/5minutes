<template>
  <q-layout view="lHh Lpr lFf">
    <Header
      :toggleLeftDrawer="toggleLeftDrawer"
      :activeRoute="active"
    />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="drawer">
      <DrawerContent
        :leftDrawerOpen="leftDrawerOpen"
        :activeRoute="active"
      />
    </q-drawer>
    <q-page-container>
      <!-- {{active}} -->
      <div class="q-ma-lg mt-50">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import DrawerContent from "components/DrawerContent.vue";
import Header from 'components/Header.vue';
import getActiveRoute from '../helpers/getBaseRoute';

export default defineComponent({
  name: "IndexPage",

  components: {
    DrawerContent,
    Header
  },

  data() {
    return {
      leftDrawerOpen: false,
      active: getActiveRoute(this.$route.fullPath) //this.$store.getters["appstore/getActiveRoute"]
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    async setActiveRoute(){
      // Function to set active route.
      // takes the current path and sets state to carry active state.
      this.active=getActiveRoute(this.$route.fullPath);
      // console.log(this.active);
    }
  },

  mounted(){
    this.setActiveRoute();
  },

  watch: {
    $route(to){
      this.active = getActiveRoute(to.fullPath);
      // console.log(to);
    }
  }
});
</script>
<style>

  .mt-50{
    margin: 50px
  }

</style>
