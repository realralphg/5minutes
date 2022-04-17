<template>
  <div class="row justify-between">
    <div class="col-md-7">
      <div class="shadow-1">
        <div class="q-pa-lg row user">
          <q-avatar size="80px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
          <div class="column user-details ">
            <div class="name">Jane Doe</div>
            <div class="position">CEO/Chairman Anonymous Society </div>
            <q-space />
            <div class="location"> <q-icon name="location_on" color="primary" class="icon" /> Kaduna, Nigeria. </div>
            <div class="socials ">
              <img clickable v-ripple src="../../assets/facebook.png" />
              <img clickable v-ripple src="../../assets/linkedin.png" />
            </div>
          </div>
        </div>
        <div class="q-my-xl justify-center row profile-actions">
          <q-btn to="/profile/edit" class="profile-action" outline rounded color="primary" label="Edit profile" no-caps />
          <q-btn class="profile-action-solid" icon-right="chevron_right" rounded color="primary" label="Set availability" no-caps />
        </div>
        <userprofiledetails></userprofiledetails>
      </div>
      <q-card class="q-pa-md">
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
    <div class="col-md-4">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import UserProfileDetails from 'src/components/UserProfileDetails.vue';
import Sidebar from 'src/components/SidebarProfile.vue';

export default {
  name: "ProfilePage",
  components:{
    userprofiledetails: UserProfileDetails,
    sidebar: Sidebar
  }
}

</script>
