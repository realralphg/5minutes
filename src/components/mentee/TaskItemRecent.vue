<template>
  <div class="shadow-1 row q-py-md q-px-sm q-mt-md">
    <div class="col-1 column justify-center">
      <q-btn round style="width: inherit !important">
        <q-avatar size="42px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
      </q-btn>
    </div>
    <div class="col-7 column q-ml-md justify-center ">
      <div class="text-bold">
        Roseline Rice
      </div>
      <div class="text-sm ">
        Lorem, ipsum dolor sit amet consectetur adipisicing, non aliquam!...
      </div>
    </div>
    <q-space />
    <div class="col-3 column justify-center">
      <div class="row justify-end">
        <q-btn icon="newspaper" color="primary" class="btn-tt" flat borderless rounded label="Take Task" no-caps />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskItemRecentComponent',

}
</script>
