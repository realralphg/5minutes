<template>
  <div class="chat-box-container shadow-1">
    <div class="chat-box">
      <!-- Chat head -->
      <div class="chat-heading q-pt-xl q-px-lg q-pb-lg row justify-between">
        <div class="row chat-owner">
          <q-avatar size = "60px">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="column justify-center q-pl-md">
            <div class="name">
              Suzan Deen
            </div>
            <div class="online-status">
              online
            </div>
          </div>
        </div>
        <div class="chat-actions row">
          <div class="row">
            <div class="column justify-center">
              <q-btn flat class="chat-action q-mr-md" round icon="local_phone" />
            </div>
            <div class="column justify-center">
              <q-btn flat class="chat-action" round icon="videocam" />
            </div>
          </div>
          <q-space />
          <div class="column justify-center">
            <q-btn flat round color="white" icon="more_vert" />
          </div>
        </div>
      </div>
      <!-- Chat body -->
      <div class="q-pa-md justify-center chat-body">
        <div class="messages">
          <chatmessage
            :sent="true"
          >
            Sent
          </chatmessage>

          <chatmessage
            :avatar="'https://cdn.quasar.dev/img/avatar.png'"
            :sent="false"
            :typing="false"
          >
            Recieved
          </chatmessage>

          <chatmessage
            :sent="true"
          >
            Sent
          </chatmessage>

          <chatmessage
            :avatar="'https://cdn.quasar.dev/img/avatar.png'"
            :sent="false"
            :typing="false"
          >
            Recieved
          </chatmessage>

          <chatmessage
            :sent="true"
          >
            Sent
          </chatmessage>

          <chatmessage
            :avatar="'https://cdn.quasar.dev/img/avatar.png'"
            :sent="false"
            :typing="false"
          >
            Recieved
          </chatmessage>

          <chatmessage
            :sent="true"
          >
            Sent
          </chatmessage>

          <chatmessage
            :avatar="'https://cdn.quasar.dev/img/avatar.png'"
            :sent="false"
            :typing="false"
          >
            Recieved
          </chatmessage>

          <chatmessage
            :avatar="'https://cdn.quasar.dev/img/avatar.png'"
            :sent="false"
            :typing="true"
          >
            typing
          </chatmessage>
        </div>
      </div>
      <div class="send-form">
        <div class="row">
          <div class="col-3 column justify-center">
            <div class="msg-actions row ">
              <div class="column justify-center">
                <q-btn size="8px" icon="add_photo_alternate" round flat text-color="primary" />
              </div>
              <div class="column justify-center">
                <q-btn size="8px" icon="description" round flat text-color="primary" />
              </div>
              <div class="column justify-center">
                <q-btn size="8px" icon="add" round flat text-color="primary" />
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="send-form-input-container q-my-sm row">
              <input type="text" />
              <q-space />
              <div class="row ">
                <div class="column justify-center">
                  <q-btn size="8px" icon="mic" round flat text-color="primary" />
                </div>
                <div class="column justify-center">
                  <q-btn size="8px" icon="send" round flat text-color="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chatmessage from 'components/ChatMessage';

export default {
  name: "ChatBoxComponent",
  components:{
    chatmessage
  }
}

</script>
