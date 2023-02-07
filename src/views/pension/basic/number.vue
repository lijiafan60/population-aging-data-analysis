<template>
  <EChart height="800px" width="1250px" :options="options"></EChart>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "basicPensionNumber",
  components: {EChart},
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['总人数', '在职人数', '离职人数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: '年份',
          boundaryGap: false,
          data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          type: 'value',
          name: '人数（千万）'
        },
        series: [
          {
            name: '总人数',
            type: 'line',
            stack: 'Total',
            data: [10, 15, 12.5, 5, 5, 5, 5]
          },
          {
            name: '在职人数',
            type: 'line',
            stack: 'Total',
            data: [22, 18, 19, 23, 29, 33, 31]
          },
          {
            name: '离职人数',
            type: 'line',
            stack: 'Total',
            data: [15, 23, 21, 15, 19, 13, 10]
          }
        ]
      },
    }
  }
}
</script>

<style scoped>

</style>