<template>
  <div class="row page-container " >
    <div class="col-md-7 col-sm-12 col-xs-12">
      <stories></stories>
      <welcome></welcome>
      <div class="column">
        <div class="post-form">
          <div class="row">
            <q-avatar size="55px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
            <div class="q-ml-md q-mt-sm text-light text-bold">
              <div>What would you like to talk </div>
              <div>about, <b class="text-warning text-bolder">ARMSTRONG?</b></div>
            </div>
          </div>
          <div class="q-pa-md">
            <q-input
              filled
              type="textarea"
              class="border-radius-5 no-border bg-white"
              placeholder="Daily Inspiration"
            />
          </div>
          <div class="q-ml-md">
            <q-btn outline color="warning" rounded class="q-py-sm q-px-lg post-btn" label="Post" no-caps />
          </div>
        </div>
      </div>
      <div class="column">
        <mentorlist
          :topMentors="topMentors"
        ></mentorlist>
      </div>
      <div class="posts-container q-my-xl shadow-1">
        <postitem></postitem>
        <postitem></postitem>
        <postitem></postitem>
        <postitem></postitem>
        <postitem></postitem>
      </div>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
  import mentorlist from 'components/mentee/MentorList';
  import sidebar from 'components/sidebars/SidebarDashboard';
  import welcome from 'src/components/mentor/Welcome.vue';
  import stories from 'src/components/Stories.vue';
  import postitem from 'src/components/PostItem.vue';

  export default {
    name: "DashboardPage",
    components: {
      mentorlist,
      sidebar,
      welcome,
      stories,
      postitem
    },
    data(){
      return {
        topMentors:[
          {
            avatar: "https://randomuser.me/api/portraits/men/7.jpg",
            name: "John Doe",
            career: "CEO/Director",
            specialties: ["Github", "Development", "Leadership"]
          },
          {
            avatar: "https://randomuser.me/api/portraits/men/33.jpg",
            name: "Michael Angelo",
            career: "Software Developer",
            specialties: ["Programming", "Startups"]
          },
          {
            avatar: "https://randomuser.me/api/portraits/men/17.jpg",
            name: "Angus Rossetti",
            career: "Actor",
            specialties: ["Writing", "Leadership", "Psychology"]
          }
        ]
      }
    }
  }

</script>

<style>
.page-container{
  justify-content: space-between;
}
</style>
