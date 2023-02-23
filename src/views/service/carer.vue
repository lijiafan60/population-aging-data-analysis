<template>
  <div>
    <EChart width="600px" height="420px" :options="options"></EChart>
  </div>
</template>

<script>
import EChart from "@/common/echart/index.vue";
export default {
  name: "main-carer",
  components: {EChart},
  data() {
    return {
      options: {
        title: {
          show: true,
          text: "老年人对主要照料者选择意愿的变化趋势",
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
          itemGap: 20
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
            name: '政府或社会',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [11.41, 8.57, 9.95]
          },
          {
            name: '子女',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [50.95, 39.84, 36.26]
          },
          {
            name: '老人自己或配偶',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [18.58, 10.41, 9.72]
          },
          {
            name: '政府、子女、老人共担',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [19.06, 41.18 ,44.07 ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>