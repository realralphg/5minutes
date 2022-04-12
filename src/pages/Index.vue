<template>
  <q-layout view="lHh Lpr lFf">
    <Header
      :toggleLeftDrawer="toggleLeftDrawer"
      :activeRoute="active"
    />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="drawer">
      <DrawerContent
        :leftDrawerOpen="leftDrawerOpen"
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

export default defineComponent({
  name: "IndexPage",

  components: {
    DrawerContent,
    Header
  },

  data() {
    return {
      leftDrawerOpen: false,
      active: this.$store.getters["appstore/getActiveRoute"]
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    async setActiveRoute(){
      // Function to set active route.
      // takes the current path and sets state to carry active state.
      await this.$store.dispatch("appstore/setActiveRoute", {path: this.$route.fullPath})
      // .then(()=>{
        // })
        console.log(this.active);
        this.active = this.$store.getters["appstore/getActiveRoute"];
        console.log(this.active);

    }
  },

  mounted(){
    this.setActiveRoute();
  },

  watch: {
    $route(){
      this.setActiveRoute();
    }
  }
});
</script>
<style>

  .mt-50{
    margin: 50px
  }

</style>
