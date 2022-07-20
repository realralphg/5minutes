<template>
  <q-list>
    <q-item-label class="header q-my-sm" header>
      <img
        src="../assets/5minsLogo.svg"
        spinner-color="white"
        class="logo-sm"
      />
    </q-item-label>
    <q-item
      v-for="link in links"
      v-show="link.sidebarShow"
      :key="link.title"
      clickable
      :to="link.link"
      :class="`link ${activeRoute === link.activeIndicator?'active':''}`"
    >
      <q-item-section
        v-if="link.icon"
        avatar
        class = "icon"
      >
        <q-icon :name="link.icon" />
      </q-item-section>

      <q-item-section class="no-bg">
        <q-item-label>{{ link.title }}</q-item-label>
      </q-item-section>
    </q-item>

  </q-list>

</template>

<script>
import mentorDrawerLinks from "../constants/mentorDrawerLinks";
import menteeDrawerLinks from "../constants/menteeDrawerLinks";

export default {
  name: 'DrawerContent',
  props:["activeRoute"],
  data(){
    return {
      links: menteeDrawerLinks
    }
  }
}


</script>
