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
          <rose-pie-chart/>
        </dv-border-box12>
      </div>
    </div>
    <div class="center-box">
      <div>
        <dv-border-box12>
          <div class="map-box">
            <div class="bg-color-black">
              <div class="box-content">
                <KeepAlive>
                  <component :is="centerName"/>
                </KeepAlive>
              </div>
              <time-line/>
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

export default {
  name: "index_page",
  components: {
    TimeLine,
    ChinaMap,
    ScrollBoard,
    MultipleYAxisChart,
    RosePieChart,
    ProvinceDetail
  },
  data() {
    return {}
  },
  computed: {
    centerName: {
      type: String,
      get() {
        return this.$store.state.mapName
      },
      set(param) {
        this.$store.commit('clickProvinceName', param)
      }
    },
    gdp() {
      return {
        title: "地区生产总值",
        config: {
          header: ['省份', '生产总值'],
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
        title: "老年人口抚养比",
        config: {
          header: ['省份', '抚养比'],
          data: [
            ['江苏省', '1%'],
            ['安徽省', '2%'],
            ['北京市', '3%'],
            ['上海市', '1%'],
            ['江西省', '2%'],
            ['广东省', '2%'],
            ['黑龙江省', '4%'],
            ['浙江省', '7%'],
            ['云南省', '2%'],
            ['广西省', '9%']
          ],
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
    //避免启动时出现空数据
    this.$store.commit("getCurrentGdp");
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