<template>
  <div class="row justify-between">
    <div class="col-md-7">
      <div class="q-pa-lg">
        <div class="text-bold">
          Notifications
        </div>
        <notificationitem></notificationitem>
        <notificationitem></notificationitem>
        <notificationitem></notificationitem>
        <notificationitem></notificationitem>
      </div>
    </div>
    <div class="col-md-4">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import SidebarEditProfile from 'src/components/sidebars/SidebarEditProfile.vue';
import NotificationItem from 'src/components/notifications/NotificationItem.vue'

export default {
  name: 'NotificationsPage',
  components: {
    sidebar: SidebarEditProfile,
    notificationitem: NotificationItem
  }
}

</script>
