<template>
  <div class="mentee-list-item column " >
    <div class="q-my-md row justify-center">
      <q-avatar size="120px">
        <img src="https://randomuser.me/api/portraits/women/82.jpg">
      </q-avatar>
    </div>
    <div class="row justify-center text-bold">
      Selene Beckinshire
    </div>
    <div class="text-sm row justify-center">
      Web Developer
    </div>
    <div class="row justify-between justify-around q-my-md">
      <q-chip size="sm">Web Development</q-chip>
      <q-chip size="sm">Public Speaking</q-chip>
    </div>
    <q-separator />
    <div class="row justify-center q-mt-sm">
      <q-btn to="/mentor/mentee" label="View Profile" class="premium-btn" text-color="primary" flat rounded no-caps size="sm" />
    </div>
  </div>
</template>
<script>

export default {
  name: "MenteeListItemComponent"
}
</script>
