<template>
  <div class="sidebar-container q-pa-lg column">
    <div class="sidebar-1 q-pa-lg text-center">
      <div class="title" >Daily Inspiration</div>
      <p class="inspiration q-my-lg">
        "It's not about ideas. It's about making Ideas happen."
      </p>
      <p class="author">Scott Belsky, Behance co-founder</p>
    </div>
    <div class="sidebar-2 q-pa-lg text-center q-my-xl">
      <div class="title">MENTOR OF THE WEEK</div>
      <div class="row text-center justify-center q-my-md">
        <q-avatar rounded size="60px" class="avatar">
          <img class="avatar-image" src="https://randomuser.me/api/portraits/women/97.jpg">
        </q-avatar>
      </div>
      <div class="name">
        Camille Julia Yivan
      </div>
      <div class="position-container row justify-center">
        <div class="position">
          CEO/Director Greysoft Technologies/5minutes
        </div>
      </div>
      <div class="q-my-md">
        <q-btn class="call2action" color="primary" label="View Profile" rounded no-caps />
      </div>
    </div>
    <div class="sidebar-3 q-pa-lg">
      <div class="text1">
        Hello! get discount while referring your friends.
      </div>
      <div class="text2 q-my-md ">
        Copy the link and share to your friends and get discount.
      </div>
      <div class="text3 q-mt-md">
        <q-btn flat round color="primary" icon="content_copy" />
        Copy referral link
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarComponent"
}
</script>
<style>

</style>
