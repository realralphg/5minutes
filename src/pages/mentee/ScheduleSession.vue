<template>
  <div class="row justify-between edit-profile">
    <div class="col-md-7 shadow-1">
      <div class="q-my-md">
        <q-btn @click="$router.go(-1)" size="sm" color="primary" flat icon="arrow_back" label="Back" />
      </div>
      <div class="row">
        <div class="column q-px-md">
          <div class="text-bold">Availability sessions</div>
          <div class="text-sm">Scheduled time and date should be before today.</div>
        </div>
        <q-space />
        <div class="column q-px-sm justify-center">
          <q-btn no-caps color="primary" size="sm" dense rounded outline label="west african time" icon="public" icon-right="expand_more">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section class="text-sm">GMT +1</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-sm">UTC</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div class="column q-my-lg" v-show="!doneWriting">
        <CalendarAvailableDates />
      </div>
      <div class="column q-my-lg" v-show="doneWriting">
        <div class="bg-primary-light q-mx-sm q-pa-md text-bold">
          <q-icon name="calendar_month" size="25px" color="primary" /> &nbsp;
          {{selectedDate}}
        </div>
        <div class="bg-primary-light q-mx-sm q-pa-md text-bold">
          <q-icon name="schedule" size="25px" color="primary" /> &nbsp;
          {{selectedTime}}
        </div>
      </div>
      <div class="column q-px-md q-my-lg">
        <div class="text-bold">Session details</div>
        <div class="text-bold">What's your desired outcome from this call?</div>
        <div class="text-muted q-mb-sm">In simple sentences, what would you love to get from this call?</div>
        <q-input
          v-show="!doneWriting"
          v-model="sessionDetails"
          filled
          type="textarea"
          counter
          maxlength="100"
        />
        <p v-show="doneWriting">
          {{sessionDetails}}
        </p>
      </div>
      <div class="column q-px-md q-my-lg">
        <div class="text-bold">What are your challenges?</div>
        <div class="text-muted q-mb-sm">This helps your mentor help you better</div>
        <q-input
          v-show="!doneWriting"
          v-model="challenges"
          filled
          type="textarea"
          counter
          maxlength="100"
        />
        <p v-show="doneWriting">
          {{challenges}}
        </p>
      </div>
      <div v-show="!doneWriting" class="row justify-center q-my-xl">
        <q-btn @click="doneWriting=!doneWriting" rounded color="primary" label="Done" no-caps class="text-bold text-center" style="width: 250px" />
      </div>
      <div v-show="doneWriting" class="row justify-between q-ma-xl">
        <q-btn @click="doneWriting=!doneWriting" outline rounded color="primary" label="Edit" no-caps class="text-bold text-center" style="width: 180px" />
        <q-btn rounded color="primary" label="Done" no-caps class="text-bold text-center" style="width: 180px" />
      </div>
    </div>
    <div class="col-md-4">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import CalendarAvailableDates from "src/components/mentee/CalendarAvailableDates.vue"
import Sidebar from "src/components/sidebars/SidebarDashboard.vue";

export default {
  name: 'ScheduleSessionPage',
  components: {
    CalendarAvailableDates,
    Sidebar
  },
  data(){
    return {
      selectedDate: 'Selected Date',
      selectedTime: 'Selected Time',
      sessionDetails: '',
      challenges: '',
      doneWriting: false
    }
  }
}
</script>
