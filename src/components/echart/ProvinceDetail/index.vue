<template>
  <div id="province">
    <div class="d-flex jc-center">
      <div class="top d-flex jc-center text">
        省份 : {{ this.$store.state.provinceName }}
      </div>
      <div class="bottom">
        <EChart height="550px" width="900px" style="margin-top: 10px" :options="options">
        </EChart>
      </div>
    </div>
  </div>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "provinceDetail",
  components: {EChart},
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['人口出生率', '人口死亡率', '人口平均增长率']
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
        },
        series: [
          {
            name: '人口出生率',
            type: 'line',
            stack: 'Total',
            data: [10, 15, 12.5, 5, 5, 5, 5]
          },
          {
            name: '人口死亡率',
            type: 'line',
            stack: 'Total',
            data: [22, 18, 19, 23, 29, 33, 31]
          },
          {
            name: '人口平均增长率',
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

<style lang="scss" scoped>
#province {
  padding: 20px 16px 16px;

  .d-flex {
    flex-direction: column
  }

  .top {
    height: 180px;
    margin-bottom: 20px;
    margin-top: 16px;
  }

  .text {
    text-align: center;
    font-size: x-large;
  }

  .bottom {
    height: 590px;
    margin-bottom: 10px;
  }
}
</style>