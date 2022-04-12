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
      :key="link.title"
      clickable
      :to="link.link"
      :class="'link active'"
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

export default {
  name: 'DrawerContent',
  data(){
    return {
      links: []
    }
  },
  mounted(){
    this.links = this.$store.getters['appstore/getDrawerLinks'];
  }
}


</script>
