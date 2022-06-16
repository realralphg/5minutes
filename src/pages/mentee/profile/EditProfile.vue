<template>
  <div class="row justify-between edit-profile">
    <div class="col-md-7 shadow-1">
      <div class="q-ma-md">
        <q-btn @click="$router.go(-1)" size="sm" color="primary" flat icon="arrow_back" label="Back" />
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
              <div class="col-md-6 col-sm-12 col-xs-12 ">
                <div class="input-wrap column ">
                  <div class="form-label">Gender</div>
                  <div class="row ">
                    <div class="col-5 column ">
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
              <div class="col-md-5 col-sm-12 col-xs-12">
                <div class="input-wrap column">
                  <div class="form-label">Language</div>
                  <q-select class="select-option" outlined v-model="language" :options="languageOptions" placeholder="Language" />
                </div>
              </div>
            </div>
          </div>
          <div class="input-wrap">
            <div class="row items-stretch justify-between">
              <div class="col-md-6 col-sm-12 col-xs-12 ">
                <div class="input-wrap column">
                  <div class="form-label">Location</div>
                  <q-select class="select-option" outlined v-model="location" :options="locationOptions" placeholder="Location" />
                </div>
              </div>
              <div class="col-md-5 col-sm-12 col-xs-12 ">
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
            <div class="form-label">Hobbies:</div>
            <q-input
              v-model="text"
              filled
              type="textarea"
              placeholder="What do you love doing?"
            />
          </div>
          <div class="input-wrap">
            <div class="form-label">Key skill tags:</div>
            <q-select
              class="form-input"
              filled
              v-model="text"
              use-input
              input-debounce="0"
              label="Search a skill"
              :options="skillOptions"
              behavior="menu"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
          <div class="input-wrap">
            <div class="form-label">Experience:</div>
            <q-input class="form-input" type="text" outlined placeholder="Company" />
            <q-input class="form-input q-mt-sm" type="text" outlined placeholder="Position" />
            <div class="row q-mt-sm items-stretch justify-between">
              <div class="col-md-5 col-sm-12 col-xs-12 ">
                <q-input placeholder="From" filled v-model="startDate" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="startDate">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-md-5 col-sm-12 col-xs-12 ">
                <q-input placeholder="To" filled v-model="endDate" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="endDate">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row items-stretch justify-center">
              <q-btn unelevated round color="primary" icon="add" />
            </div>
          </div>
          <div class="input-wrap">
            <div class="form-label">Education:</div>
            <q-input class="form-input" type="text" outlined placeholder="Institution" />
            <div class="row q-mt-sm items-stretch justify-between">
              <div class="col-md-5 col-sm-12 col-xs-12 ">
                <q-input placeholder="From" filled v-model="startDate" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="startDate">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-md-5 col-sm-12 col-xs-12 ">
                <q-input placeholder="To" filled v-model="endDate" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="endDate">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row items-stretch justify-center">
              <q-btn unelevated round color="primary" icon="add" />
            </div>
          </div>
          <div class="input-wrap">
            <div class="row justify-center">
              <div class="col-md-8 col-sm-12 col-xs-12 row">
                <q-btn unelevated rounded no-caps outline color="primary" class="q-px-xl" label="Cancel" />
                <q-space />
                <q-btn unelevated rounded no-caps color="primary" class="q-px-xl" label="Update" />
              </div>
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
import SidebarEditProfileComponent from 'src/components/sidebars/SidebarEditProfile.vue';

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
      cityOptions: ['Lagos', 'Accra', 'Lome', 'Cape Town'],
      skillOptions: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
      text: '',
      startDate: '',
      endDate: '',
    }
  },

}

</script>
