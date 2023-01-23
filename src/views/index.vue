<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10"/>
          <div class="d-flex">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor"/>
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']"/>
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s"/>
        </div>

        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-left ml-3">
              <span class="text">数据分析2</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right mr-3">
              <span class="text">数据分析3</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">{{ time }}</span>
            </div>
          </div>
        </div>

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
                <china-map/>
              </dv-border-box12>
            </div>
          </div>
          <div class="right-box">
            <div>
              <dv-border-box12>
                <scroll-board/>
              </dv-border-box12>
            </div>
            <div>
              <dv-border-box12>
                <scroll-board/>
              </dv-border-box12>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import drawMixin from "../utils/drawMixin";
import {formatTime} from "@/utils";
import rosePieChart from "@/components/echart/RosePieChart/chart.vue";
import MultipleYAxisChart from "@/components/echart/MultipleYAxisChart/chart.vue";
import ScrollBoard from "@/components/ScrollBoard.vue";
import ChinaMap from "@/components/echart/ChinaMapChart/chart.vue"

export default {
  name: "index_page",
  mixins: [drawMixin],
  data() {
    return {
      loading: true,
      decorationColor: ['#568aea', '#000000'],
      time: null,
      getTime: null
    }
  },
  components: {
    ChinaMap,
    ScrollBoard,
    MultipleYAxisChart,
    rosePieChart,
  },
  mounted() {
    this.startGetTime()
    this.cancelLoading()
  },
  beforeDestroy() {
    clearInterval(this.getTime)
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    startGetTime() {
      this.getTime = setInterval(() => {
        this.time = formatTime(new Date(), "yyyy-MM-dd HH: mm: ss")
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>