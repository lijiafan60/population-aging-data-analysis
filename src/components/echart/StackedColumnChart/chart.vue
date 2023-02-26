<template>
  <div id="rosePieChart">
    <div class="bg-color-black">
      <div class="d-flex jc-center">
        <Echart
            width="430px"
            height="420px"
            style="margin-top: 20px"
            :options="options"
        ></Echart>
      </div>
    </div>
  </div>
</template>

<script>
import Echart from "@/common/echart/index.vue";

export default {
  name: "stackedColumnChart",
  components: {Echart},
  computed: {
    options() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['2011', '2012', '2013', '2014', '2016', '2017','2018','2019','2021']
        },
        series: [
          {
            name: '0-14岁',
            type: 'bar',
            barWidth: 15,
            stack: 'total',
            label: {
              show: true,
              color: "white"
            },
            emphasis: {
              focus: 'series'
            },
            data: [...this.$store.state.lessThanFifteen[this.$store.state.province]].reverse()
          },
          {
            name: '15-64岁',
            type: 'bar',
            barWidth: 15,
            stack: 'total',
            label: {
              show: true,
              color: 'white',
            },
            emphasis: {
              focus: 'series'
            },
            data: [...this.$store.state.lessThanSixtyFive[this.$store.state.province]].reverse()
          },
          {
            name: '65岁以上',
            type: 'bar',
            barWidth: 15,
            stack: 'total',
            label: {
              show: true,
              color: 'white'
            },
            emphasis: {
              focus: 'series'
            },
            data: [...this.$store.state.greaterThanSixtyFive[this.$store.state.province]].reverse()
          }
        ]
      }
    }
  }
}


</script>

<style lang="scss" scoped>

#rosePieChart {
  padding: 16px;
  border-radius: 10px;

  .bg-color-black {
    height: 435px;
    border-radius: 10px;
  }
}

</style>