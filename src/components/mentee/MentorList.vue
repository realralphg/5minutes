<template>
  <div>
    <div class="text-bold text-h6 q-mt-xl row">
      <span>Explore top mentors</span>
      <q-space />
      <q-btn to="/" color="primary" no-caps flat>view all<q-icon name="chevron_right" /></q-btn>
    </div>
    <q-card class="my-card q-pa-md">
      <div class="mentor-list-item row q-my-lg" v-for="mentor in topMentors" :key="mentor.avatar">
        <div class="col-2 column">
          <q-avatar clickable size="45px">
            <img :src="mentor.avatar">
          </q-avatar>
        </div>
        <div class="col-6 column">
          <div class="q-pl-sm column">
            <b>{{mentor.name}}</b>
            <small class="text-muted">{{mentor.career}}</small>
          </div>
          <q-space />
          <div class="row q-mb-xs">
            <q-chip v-for="specialty in mentor.specialties" :key="specialty" class="dashboard-badges" :label="specialty" />
          </div>
        </div>
        <div class="col-4 column">
          <div class="row justify-end">
            <q-btn outline rounded color="primary" class="premium-btn" no-caps label="Premium" />
          </div>
          <q-space />
          <div class="row space-betwee justify-end ">
            <q-btn outline rounded color="primary" class="m-i-btns" no-caps label="View Profile" />
            <q-btn rounded color="primary" class="m-i-btns" no-caps label="Follow" />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "MentorListComponent",
  props: ["topMentors"]

}
</script>
<style>

</style>
