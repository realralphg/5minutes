<template>
  <div class="set-av row justify-between edit-profile">
    <div class="col-md-7 shadow-1">
      <q-date
        v-model="days"
        range
        multiple
        minimal
        flat
        :options="optionsFn"
        class="calendar q-mt-lg"
      />
      <div class="input-wrap">
        <div class="row justify-center q-mt-md">
          <div class="form-label text-dark">Start Time:</div>
        </div>
        <div class="text-sm text-center">
          Every meeting starts at this time and ends in 5 minutes.
        </div>
        <div class="row justify-center q-mt-md">
          <q-input placeholder="Time" filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="input-wrap">
          <div class="row justify-center q-px-sm">
            <div class="col-md-8 col-sm-12 col-xs-12 row">
              <q-btn unelevated rounded no-caps outline color="primary" class="q-px-xl" label="Cancel" />
              <q-space />
              <q-btn unelevated rounded no-caps color="primary" class="q-px-xl" label="Set" />
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
  name: "SetAvailabilityPage",
  components: {
    sidebar: SidebarEditProfileComponent
  },
  data(){
    return {
      days: null
    }
  },
  methods: {
    optionsFn(eachDate){
      let date = new Date();
      let year = date.getFullYear();
      let month = (date.getMonth()+1)>9?date.getMonth()+1:`0${date.getMonth()+1}`;
      let day = (date.getDate())>9?date.getDate():`0${date.getDate()}`;
      date=`${year}/${month}/${day}`;
      return eachDate > date;
    }
  },
}
</script>
