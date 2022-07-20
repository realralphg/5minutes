<template>
  <div>
    <div class="row q-my-md">
      <div class="text-h5">Welcome to <span class="text-primary">5minutes,</span> <b>ARMSTRONG!</b></div>
    </div>
    <div class="row">
      <div class="col-md-6 green-card">
        Complete profile to get full access to 5minutes features.
      </div>
    </div>
    <div class="q-my-md">
      <q-btn to="/profile" outline rounded color="primary" class="q-px-lg" label="View my profile" no-caps />
    </div>
  </div>
</template>
<script>
  export default {
    name: "WelcomeComponent"
  }
</script>
<style>

</style>
