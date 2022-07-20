<template>
  <div class="shadow-1 q-pa-lg notification-item">
    <div class="row">
      <div class="col-md-2">
        <q-avatar size="50px">
          <img src="https://randomuser.me/api/portraits/men/44.jpg">
        </q-avatar>
      </div>
      <div class="col-md-6 column user-details">
        <div class="text-bold " >Joseph San Hulio</div>
        <div class="text-muted">Web Developer</div>
        <q-space />
        <div>
          <q-chip class="chips">Github</q-chip>
          <q-chip class="chips">Development</q-chip>
          <q-chip class="chips">Leadership</q-chip>
        </div>
      </div>
      <div class="col-md-4 column">
        <q-space />
        <div class="row justify-around">
          <q-btn outline color="primary" class="q-px-md text-sm text-bold" rounded no-caps label="Reject" />
          <q-btn color="primary" class="q-px-md text-sm text-bold" rounded no-caps label="Accept" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "NotificationItemComponent"
}
</script>
