<template>
  <q-list>
    <q-item-label header> Essential Links </q-item-label>
    <q-item
      v-for="link in links"
      :key="link.title"
      clickable
      tag="a"
      target="_blank"
      :href="link.link"
    >
      <q-item-section
        v-if="link.icon"
        avatar
      >
        <q-icon :name="link.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ link.title }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
      </q-item-section>
    </q-item>

  </q-list>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DrawerContent',
  props: ["links"]
})
</script>
