<template>
  <div>
    <!-- <IEcharts :option="stat" :loading="true" ></IEcharts> -->
    <div :style="{
      width: '350px'
    }">
      <apexchart  type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
<script>
// import IEcharts from 'vue-echarts-v3/src/full.js';

export default {
  name: "TaskStatComponent",
  components:{
    // IEcharts
  },
  data(){
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'none',
              display: 'none',
              show: false,

            }
          }
        }]
      },
    }
  }
}
</script>
