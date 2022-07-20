<template>
  <div :class="`search-filter row  ${innerWidth<=576?'justify-center':'space-between'}`">
    <q-btn :class="`filters ${innerWidth<=576?'q-mt-sm q-mx-xs':' q-px-xl'}`" rounded text-color="dark" flat color="light" label="All chats" />
    <q-btn :class="`filters ${innerWidth<=576?'q-mt-sm q-mx-xs':' q-px-xl'}`" rounded text-color="dark" flat color="light" label="Mentors" />
    <q-btn :class="`filters ${innerWidth<=576?'q-mt-sm q-mx-xs':' q-px-xl'}`"  rounded color="primary" label="Groups" />
  </div>
</template>
<script>
  export default {
    name: "SearchFilterComponent",
    data(){
      return{
        innerWidth: window.innerWidth
      }
    }
  }
</script>
