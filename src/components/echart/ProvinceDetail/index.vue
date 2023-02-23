<template>
  <div id="province">
    <div class="d-flex jc-center">
      <div class="top d-flex jc-center text" @click="toChinaMap">
        {{ province }}
      </div>
      <div class="bottom">
        <EChart height="550px" width="900px" style="margin-top: 10px" :options="dynamicOptions">
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
    return {}
  },
  methods: {
    toChinaMap() {
      this.$store.commit("backToChinaMap")
    }
  },
  computed: {
    province() {
      return this.$store.state.province;
    },
    dynamicOptions() {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['人口出生率', '人口死亡率', '人口自然增长率']
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
          data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2021']
        },
        yAxis: {
          type: 'value',
          name: '%'
        },
        series: [
          {
            name: '人口出生率',
            type: 'line',
            stack: 'Total',
            data: this.$store.state.currentBirthRate
          },
          {
            name: '人口死亡率',
            type: 'line',
            stack: 'Total',
            data: this.$store.state.currentDieRate
          },
          {
            name: '人口自然增长率',
            type: 'line',
            stack: 'Total',
            data: this.$store.state.currentNaturalGrowthRate
          }
        ]
      }
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