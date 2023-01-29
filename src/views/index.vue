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
          <scroll-board :title="title" :config="config"/>
        </dv-border-box12>
      </div>
      <div>
        <dv-border-box12>
          <scroll-board :title="title" :config="config"/>
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
  data() {
    return {
      title : "title",
      config: {
        header: ['组件', '分支'],
        data: [
          ['组件1', 'dev-1'],
          ['组件2', 'dev-2'],
          ['组件3', 'dev-3'],
          ['组件4', 'rea-1'],
          ['组件5', 'rea-2'],
          ['组件6', 'fix-2'],
          ['组件7', 'fix-4'],
          ['组件8', 'fix-7'],
          ['组件9', 'dev-2'],
          ['组件10', 'dev-9']
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
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
</style>