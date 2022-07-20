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
      <div class="q-ma-lg ">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent  } from "vue";
import DrawerContent from "components/DrawerContent.vue";
import Header from 'components/Header.vue';
import getActiveRoute from '../helpers/getBaseRoute';

// const taskStat = defineAsyncComponent(()=>{
//   import('components/mentee/TaskStat.vue');
// })

export default defineComponent({
  name: "IndexPage",

  components: {
    DrawerContent,
    Header,
    // taskStat
  },

  data() {
    return {
      leftDrawerOpen: false,
      active: getActiveRoute(this.$route.fullPath)
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
    }
  },

  mounted(){
    this.setActiveRoute();
  },

  watch: {
    $route(to){
      this.active = getActiveRoute(to.fullPath);
    }
  }
});
</script>
<style>

  .mt-50{
    margin: 50px
  }

</style>
