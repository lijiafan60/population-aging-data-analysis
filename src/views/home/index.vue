<template>
  <div class="body-box">
    <div class="left-box">
      <div>
        <dv-border-box-12>
          <multiple-y-axis-chart/>
        </dv-border-box-12>
      </div>
      <div>
        <dv-border-box12>
          <component :is="leftBottom"/>
        </dv-border-box12>
      </div>
    </div>
    <div class="center-box">
      <div>
        <dv-border-box12>
          <div class="map-box">
            <div class="bg-color-black">
              <div class="box-content">
                <component :is="centerName"/>
              </div>
              <time-line v-show="centerName == 'ChinaMap'"/>
            </div>
          </div>
        </dv-border-box12>
      </div>
    </div>
    <div class="right-box">
      <div>
        <dv-border-box12>
          <scroll-board :title="dependencyRatio.title" :config="dependencyRatio.config"/>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12>
          <scroll-board :title="gdp.title" :config="gdp.config"/>
        </dv-border-box12>
      </div>
    </div>
  </div>
</template>

<script>

import RosePieChart from "@/components/echart/RosePieChart/chart.vue";
import MultipleYAxisChart from "@/components/echart/MultipleYAxisChart/chart.vue";
import ScrollBoard from "@/components/ScrollBoard.vue";
import ChinaMap from "@/components/echart/ChinaMapChart/chart.vue";
import ProvinceDetail from "@/components/echart/ProvinceDetail/index.vue";
import TimeLine from "@/components/TimeLine.vue";
import StackedColumnChart from "@/components/echart/StackedColumnChart/chart.vue"

export default {
  name: "index_page",
  components: {
    TimeLine,
    ChinaMap,
    ScrollBoard,
    MultipleYAxisChart,
    RosePieChart,
    ProvinceDetail,
    StackedColumnChart
  },
  data() {
    return {}
  },
  computed: {
    centerName() {
      return this.$store.state.mapName
    },
    leftBottom() {
      return (this.$store.state.province === "" ? "RosePieChart" : "StackedColumnChart")
    },
    gdp() {
      return {
        title: this.$store.state.year + " ???????????????????????????",
        config: {
          header: ['??????', '????????????(??????)'],
          data: this.$store.state.currentGdp,
          rowNum: 7,
          headerHeight: 35,
          headerBGC: '#0f1325',
          oddRowBGC: '#0f1325',
          evenRowBGC: '#171c33',
          index: true,
          columnWidth: [60],
          align: ['center']
        }
      }
    },
    dependencyRatio() {
      return {
        title: this.$store.state.year + " ??????????????????????????????",
        config: {
          header: ['??????', '?????????(%)'],
          data: this.$store.state.currentDependencyRatio,
          rowNum: 7,
          headerHeight: 35,
          headerBGC: '#0f1325',
          oddRowBGC: '#0f1325',
          evenRowBGC: '#171c33',
          index: true,
          columnWidth: [60],
          align: ['center']
        }
      }
    }
  },
  beforeCreate() {
    //??????????????????????????????
    this.$store.commit("getCurrentGdp");
    this.$store.commit("getCurrentDependencyRatio");
    this.$store.commit("getCurrentNationalAgeStructure");
  }
}
</script>

<style lang="scss" scoped>
.body-box {
  height: 930px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  .left-box {
    width: 500px;
    display: grid;
    grid-template-rows: repeat(2, 50%);
  }

  .center-box {
    width: 950px;
    margin-left: 5px;
    margin-right: 5px;

    .map-box {
      width: 950px;
      height: 930px;
      display: grid;
      grid-template-rows: 84fr 5fr;

      .bg-color-black {
        width: 918px;
        height: 900px;
        margin: 16px;
        border-radius: 10px;

        .box-content {
          height: 840px;
        }
      }
    }
  }

  .right-box {
    width: 450px;
    display: grid;
    grid-template-rows: repeat(2, 50%);
  }
}
</style>