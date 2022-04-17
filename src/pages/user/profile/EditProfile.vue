<template>
  <div class="row justify-between edit-profile">
    <div class="col-md-7 shadow-1">
      <div class="q-ma-md">
        <q-btn to="/profile" size="sm" color="primary" flat icon="arrow_back" label="Back" />
      </div>
      <div class="row justify-center q-my-lg">
        <q-btn round>
          <q-avatar size="80px" class="edit-photo-avatar">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            <q-badge class="edit-photo-badge" round align="middle" floating color="teal" >
              <img src="../../../assets/change_dp.png">
            </q-badge>
          </q-avatar>
        </q-btn>
      </div>
      <div class="q-pa-lg">
        <div class="text-bold">Personal Information</div>
        <div class="text-muted">This information will be displayed publicly, so be careful what you share.</div>
        <div class="edit-form">
          <div class="input-wrap">
            <div class="form-label">Full name</div>
            <q-input class="form-input" type="text" outlined placeholder="John Doe" />
          </div>
          <div class="input-wrap">
            <div class="form-label">Email</div>
            <q-input class="form-input" type="email" outlined placeholder="johndoe@example.com" />
          </div>
          <div class="input-wrap">
            <div class="form-label">Phone number</div>
            <q-input class="form-input" type="tel" outlined placeholder="+23490 123 4567 890" />
          </div>
          <div class="input-wrap">
            <div class="row items-stretch justify-between">
              <div class="col-md-6 ">
                <div class="input-wrap column ">
                  <div class="form-label">Gender</div>
                  <div class="row ">
                    <div class="col-6 column ">
                        <q-card bordered flat class="q-pa-sm gender-card">
                          <q-radio v-model="gender" val="m" label="Male" />
                        </q-card>
                    </div>
                    <q-space />
                    <div class="col-6 column">
                        <q-card bordered flat class="q-pa-sm gender-card">
                          <q-radio v-model="gender" val="f" label="Female" />
                        </q-card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="input-wrap column">
                  <div class="form-label">Language</div>
                  <q-select class="select-option" outlined v-model="language" :options="languageOptions" placeholder="Language" />
                </div>
              </div>
            </div>
          </div>
          <div class="input-wrap">
            <div class="row items-stretch justify-between">
              <div class="col-md-6 ">
                <div class="input-wrap column">
                  <div class="form-label">Location</div>
                  <q-select class="select-option" outlined v-model="location" :options="locationOptions" placeholder="Location" />
                </div>
              </div>
              <div class="col-md-5">
                <div class="input-wrap column">
                  <div class="form-label">City</div>
                  <q-select class="select-option" outlined v-model="city" :options="cityOptions" placeholder="City" />
                </div>
              </div>
            </div>
          </div>
          <div class="input-wrap">
            <div class="form-label">Bio:</div>
            <q-input
              v-model="text"
              filled
              type="textarea"
              placeholder="Short description of yourself and experience"
            />
          </div>
          <div class="input-wrap">
            <div class="row justify-center">
              <q-btn unelevated rounded color="primary" label="Update" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import SidebarEditProfileComponent from 'src/components/SidebarEditProfile.vue';

export default {
  name: "EditProfilePage",
  components:{
    sidebar: SidebarEditProfileComponent
  },
  data(){
    return {
      gender: '',
      language: '',
      location: '',
      city: '',
      languageOptions: ['English', 'Hausa', 'French', 'Zulu'],
      locationOptions: ['Nigeria', 'Ghana', 'Togo', 'South Africa'],
      cityOptions: ['Lagos', 'Accra', 'Lome', 'Cape Town']
    }
  }
}

</script>
