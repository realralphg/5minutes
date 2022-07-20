<template>
  <div class="sidebar-container q-pa-lg column">
    <div class="text-bold q-my-md">Suggestion for mentees</div>
    <div class="sidebar-1 q-pa-sm text-center">
      <div class="row justify-center q-my-md">
        <q-avatar size="80px">
          <img src="https://randomuser.me/api/portraits/women/44.jpg">
        </q-avatar>
      </div>
      <div class="column q-mb-xl">
        <div class="text-bold text-light">Aubrey Hale</div>
        <div class="text-sm">A.I. Student</div>
      </div>
      <q-btn unelevated label="View Profile" text-color="primary" color="white" rounded size="sm" no-caps class="q-px-xl text-bold" />
    </div>
    <div class="sidebar-4 q-pa-sm q-mt-xl text-center">
      <div class="row text-bold">
        <q-avatar size="30px" color="secondary" text-color="primary" icon="send" />
        <div class="text-bold column justify-center text-primary q-pl-sm">
          Weekly Newsletter
        </div>
      </div>

      <p class="text-bold text-sm q-mt-xl q-mb-lg">
        We'll keep you updated when the best opportunities pop up on 5 minutes.
      </p>

      <div class="q-mb-md">
        <q-input dense borderless bg-color="white" v-model="text" placeholder="Enter your email" class="subscribe-input text-bold text-sm" />
        <q-btn unelevated label="Subscribe" text-color="white" color="primary" rounded size="sm" no-caps class="q-px-xl text-bold" />
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarEditProfileComponent",
  data(){
    return {
      text: ''
    }
  }
}
</script>
<style>

</style>
