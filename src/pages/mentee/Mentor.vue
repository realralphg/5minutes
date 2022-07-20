<template>
  <div class="row justify-between">
    <div class="col-md-7 col-sm-12 col-xs-12 ">
      <div class="shadow-1">
        <div class="q-pa-lg row user">
          <q-avatar size="80px">
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
          <div class="column user-details ">
            <div class="name">Samantha Harris</div>
            <div class="position">Backend Intern at Google</div>
            <q-space />
            <div class="location"> <q-icon name="location_on" color="primary" class="icon" /> Kaduna, Nigeria. </div>
            <div class="socials ">
              <img clickable v-ripple src="../../assets/facebook.png" />
              <img clickable v-ripple src="../../assets/linkedin.png" />
            </div>
            <div class="q-my-xl justfy-center row profile-actions">
              <q-btn class="profile-action q-mt-md" outline rounded color="primary" label="Follow" no-caps />

              <q-btn to="/mentee/chat" class="profile-action-2 q-mt-md" outline icon-right="chat" rounded color="primary" label="Chat" no-caps />
              <q-btn to="/mentee/schedule-session" class="profile-action-solid q-mt-md" icon-right="phone" rounded color="primary" label="Schedule session" no-caps />
            </div>
          </div>
        </div>
        <mentorprofiledetails></mentorprofiledetails>
      </div>
      <q-card class="q-pa-md q-mt-md">
        <div class="text-h6"> <b>Key Skill Tags:</b> </div>
        <div class="skill-tags row ">
          <div class="tag">#Agritechnology</div>
          <div class="tag">#Leadership</div>
          <div class="tag">#Creative</div>
          <div class="tag">#Entrepreneurship</div>
          <div class="tag">#FinancialTechnology</div>
        </div>
      </q-card>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12 ">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import MentorProfileDetails from 'src/components/mentee/MentorProfileDetails.vue';
import Sidebar from 'src/components/sidebars/SidebarProfile.vue';

export default {
  name: 'MenteePage',
  components:{
    mentorprofiledetails: MentorProfileDetails,
    sidebar: Sidebar
  }
}
</script>
