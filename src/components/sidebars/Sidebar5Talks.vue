<template>
  <div class="column q-my-md bg-5talks">
    <sidebar-item />
    <sidebar-item />
    <sidebar-item />
  </div>
</template>
<script>
import SidebarItem from '../5talks/SidebarItem.vue'

export default {
  name: 'Sidebar5TalksComponent',
  components: {
    SidebarItem
  }
}
</script>
