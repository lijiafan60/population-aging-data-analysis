<template>
  <div>
    <EChart width="580px" height="420px" :options="options"></EChart>
  </div>
</template>

<script>

import EChart from "@/common/echart/index.vue";

export default {
  name: "mechanism-impression",
  components: {EChart},
  data() {
    return {
      options: {
        title: {
          show: true,
          text: "老年人对养老机构印象的变化趋势",
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
          top: 'bottom',
          itemGap: 50,
          itemWidth: 50
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['2014', '2016', '2018']
        },
        series: [
          {
            name: '较好',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [32.64, 20.17, 17.82]
          },
          {
            name: '一般',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [40.85, 64.46, 65.01]
          },
          {
            name: '较差',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [26.51, 15.37, 17.17]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>