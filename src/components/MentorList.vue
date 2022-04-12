<template>
  <div>
    <div class="text-bold text-h6 q-mt-xl row">
      <span>Explore top mentors</span>
      <q-space />
      <q-btn to="/" color="primary" no-caps flat>view all</q-btn>
    </div>
    <q-card class="my-card q-pa-md">
      <div class="mentor-list-item row">
        <div class="col-2 column">
          <q-avatar clickable size="45px">
            <img src="https://randomuser.me/api/portraits/men/7.jpg">
          </q-avatar>
        </div>
        <div class="col-6 column">
          <div class="q-pl-sm column">
            <b>John Doe</b>
            <small class="text-muted">CEO/Director</small>
          </div>
          <q-space />
          <div class="row q-mb-xs">
            <q-chip class="dashboard-badges" label="Github" />
            <q-chip class="dashboard-badges" label="Development" />
            <q-chip class="dashboard-badges" label="Leadership" />
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

}
</script>
<style>

</style>
