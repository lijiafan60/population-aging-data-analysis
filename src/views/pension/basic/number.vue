<template>
  <EChart height="800px" width="1250px" :options="option"></EChart>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "basicPensionNumber",
  components: {EChart},
  data() {
    return {}
  },
  computed: {
    option() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['城镇职工总数', '离退人员', '在职职工']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2011','2012', '2013','2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '城镇职工总数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.BasicPensionNumber.numberOfParticipants[this.$store.state.pensionProvince]].reverse()
          },
          {
            name: '离退人员',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.BasicPensionNumber.NumberOfRetirees[this.$store.state.pensionProvince]].reverse()
          },
          {
            name: '在职职工',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.BasicPensionNumber.numberOfEmployees[this.$store.state.pensionProvince]].reverse()
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>