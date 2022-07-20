<template>
  <div :class="`row page-container ${tog?'justify-between':'justify-center'}`" >
    <div
      class="col-md-6 col-sm-12 col-xs-12"
      transition-show="slide-left"
      transition-hide="slide-right"
    >
      <stories></stories>
      <div class="column">
        <chatsearchbar></chatsearchbar>
      </div>
      <div class="column">
        <searchfilter></searchfilter>
      </div>
      <div class="column q-mt-lg">
        <q-item v-ripple clickable class="row shadow-1 add-group">
          <div class="text-primary column justify-center"><b>Group</b></div>
          <q-space />
          <div><q-icon class="icon" name="add" /></div>
        </q-item>
      </div>
      <div class="column">
        <div>
          <span @click="tog=!tog"><chatlistitemgroup></chatlistitemgroup></span>
          <span @click="tog=!tog"><chatlistitemuser></chatlistitemuser></span>
          <span @click="tog=!tog"><chatlistitemgroup></chatlistitemgroup></span>
          <span @click="tog=!tog"><chatlistitemgroup></chatlistitemgroup></span>
        </div>
      </div>
    </div>
    <transition
      v-show="tog"
      appear
      enter-active-class="animate__animated animate__slideInRight animate__faster"
      leave-active-class="animate__animated animate__slideOutRight animate__faster"
    >
      <div class="col-md-5 col-sm-12 col-xs-12" v-show="tog">

        <chatbox
          :activeChat="activeChat"
        ></chatbox>
      </div>
    </transition>
  </div>
</template>

<script>
  import stories from 'src/components/Stories.vue';
  import chatsearchbar from 'src/components/ChatSearchBar.vue';
  import searchfilter from 'src/components/SearchFilter.vue';
  import chatlistitemgroup from 'src/components/ChatListItemGroup.vue';
  import chatlistitemuser from 'src/components/ChatListItemUser.vue';
  import chatbox from 'src/components/ChatBox.vue';

  export default {
    name: "ChatPage",
    components: {
      stories,
      chatsearchbar,
      searchfilter,
      chatlistitemgroup,
      chatlistitemuser,
      chatbox
    },
    data(){
      return {
        tog: false,
        activeChat: null
      }
    },
    methods: {
      displayChat(user){
        if(activeChat !== null){
          this.tog = !this.tog;
        }
      }
    }
  }

</script>

<style>

</style>
