<template>
  <div class="message-box ">

    <div class="row">
      <q-avatar v-show="!sent" class="q-mr-xs">
        <img :src="avatar">
      </q-avatar>
      <div :class="`col-10 message-container  ${sent?'sent':'recieved'}`">
        <span v-show="!typing"><slot /></span>
        <q-spinner-dots v-show="typing" size="2rem" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatMessageComponent",
  props: ["avatar", "sent", "typing"]
}

</script>
