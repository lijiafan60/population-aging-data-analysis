<template>
<EChart height="800px" width="1250px" :options="option"></EChart>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "socialPensionBalance",
  components: {EChart},
  data() {
    return {
    }
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
          data: ['收入', '支出', '结余']
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
            name: '收入',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.SocialPensionBalance.income[this.$store.state.pensionProvince]].reverse()
          },
          {
            name: '支出',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.SocialPensionBalance.expenses[this.$store.state.pensionProvince]].reverse()
          },
          {
            name: '结余',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            data: [...this.$store.state.SocialPensionBalance.surplus[this.$store.state.pensionProvince]].reverse()
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>