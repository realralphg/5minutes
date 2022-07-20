<template>
  <div class="row justify-between">
    <div class="col-md-7 col-sm-12 col-xs-12">
      <div class="row justify-center">
        <div v-for="n in 7" :key="n" class="col-md-6 col-sm-12 col-xs-12">
          <mentorlistitem></mentorlistitem>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12 ">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import SidebarDashboard from "src/components/sidebars/SidebarDashboard.vue";
import MentorListItem from 'src/components/mentee/MentorListItem.vue';

export default {
  name: "MyMentorsPage",
  components: {
    sidebar: SidebarDashboard,
    mentorlistitem: MentorListItem
  }

}
</script>
