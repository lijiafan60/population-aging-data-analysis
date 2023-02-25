<template>
  <EChart height="800px" width="1250px" :options="option"></EChart>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "socialPensionNumber",
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
          data: ['参保人数', '实际领取待遇人数']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '参保人数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.SocialPensionNumber.numberOfParticipants[this.$store.state.pensionProvince]].reverse()
          },
          {
            name: '实际领取待遇人数',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.SocialPensionNumber.actualNumberOfRecipients[this.$store.state.pensionProvince]].reverse()
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>