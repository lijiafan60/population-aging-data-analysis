<template>
  <div>
    <EChart width="600px" height="420px" :options="options"></EChart>
  </div>
</template>

<script>
import EChart from "@/common/echart/index.vue";
export default {
  name: "retirement-place",
  components: {EChart},
  data() {
    return {
      options: {
        title: {
          show: true,
          text: "老年人养老地点选择意愿的变化趋势",
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
            name: '居家养老',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [95.79, 95.45, 94.38]
          },
          {
            name: '社区养老',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.14, 1.75, 2.34]
          },
          {
            name: '机构养老',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [3.80, 2.80, 3.28]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>