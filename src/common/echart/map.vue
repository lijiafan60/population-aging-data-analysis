<template>
  <div id="mapChart" :class="className" :style="{ height: height, width: width }"/>
</template>

<script>
import chinaJson from "./china.json"

export default {
  name: 'mapChart',
  props: {
    className: {
      type: String,
      default: 'mapChart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler(options) {
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  mounted() {
    this.$echarts.registerMap('china', chinaJson);
    this.initChart();
  },
  beforeDestroy() {
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(document.getElementById("mapChart"));
      this.chart.setOption(this.options,true)
    }
  }
}
</script>

<style>
</style>
