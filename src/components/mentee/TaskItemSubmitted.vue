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
    <div class="col-3 row justify-center ">
      <div class="column justify-center">
        <!-- eslint-disable-next-line -->
        <q-knob v-model="performance"
          show-value
          readonly
          font-size="12px"
          :class="`${performanceDetails.text} text-bold q-ma-md`"
          size="42px"
          :thickness="0.2"
          :color="`${performanceDetails.color}`"
          track-color="grey-3"
        >
          {{ performance }}%
        </q-knob>
      </div>
      <q-space />
      <div class="column justify-center">
        <q-btn v-show="performance<=99" icon="newspaper" :class="`btn-st bg-${performanceDetails.color}-light text-${performanceDetails.color}`" flat borderless rounded :label="performanceDetails.btnText" no-caps />
      </div>
      <div class="column justify-center">
        <img v-show="performance ===100" style="height: 40px" src="../../assets/trophycup.svg" :ratio="9/9"/>
      </div>
      <q-space />
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskItemSubmittedComponent',
  props: ['performance'],
  data(){
    return {
      performanceDetails: {
        text: '',
        color: ''
      }
    }
  },
  mounted(){
    this.performanceDetails={
      text: (this.performance>10)? (this.performance>=70?'text-primary':'text-warning') : 'text-red',
      color: (this.performance>10)? (this.performance>=70?'primary':'warning') : 'red',
      btnText: (this.performance>10)? (this.performance>=70?'Great':'Fair') : 'Bad'
    }
  }

}
</script>
