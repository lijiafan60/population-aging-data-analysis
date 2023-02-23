<template>
  <div>
    <EChart width="600px" height="420px" :options="options"></EChart>
  </div>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "mechanism-understanding-degree",
  components: {EChart},
  data() {
    return {
      options: {
        title: {
          show: true,
          text: "老年人对养老机构的了解程度的变化趋势",
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
            name: '了解',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [15.03, 9.23, 10.53]
          },
          {
            name: '有些了解',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [27.18, 35.91, 39.31]
          },
          {
            name: '不了解',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [57.79, 54.86, 50.16]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>