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
</template>

<script>


import rosePieChart from "@/components/echart/RosePieChart/chart.vue";
import MultipleYAxisChart from "@/components/echart/MultipleYAxisChart/chart.vue";
import ScrollBoard from "@/components/ScrollBoard.vue";
import ChinaMap from "@/components/echart/ChinaMapChart/chart.vue"

export default {
  name: "index_page",
  components: {
    ChinaMap,
    ScrollBoard,
    MultipleYAxisChart,
    rosePieChart,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
</style>