<template>
  <div class="mentee-list-item column " >
    <div class="q-my-md row justify-center">
      <q-avatar size="120px">
        <img src="https://randomuser.me/api/portraits/men/89.jpg">
      </q-avatar>
    </div>
    <div class="row justify-center text-bold">
      Rowan Atkinston
    </div>
    <div class="text-sm row justify-center">
      Digital Nomad
    </div>
    <div class="row justify-between justify-around q-my-md">
      <q-chip size="sm">Programming</q-chip>
      <q-chip size="sm">Battling Whales</q-chip>
      <q-chip size="sm">Sleeping</q-chip>
    </div>
    <q-separator />
    <div class="row justify-center q-mt-sm">
      <q-btn to="/mentee/my-mentors/mentor" label="View Profile" class="premium-btn" text-color="primary" flat rounded no-caps size="sm" />
    </div>
  </div>
</template>
<script>

export default {
  name: "MenteeListItemComponent"
}
</script>
