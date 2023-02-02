<template>
  <div id="mapChart" :class="className" :style="{ height: height, width: width }"/>
</template>

<script>
import chinaJson from "./china.json"
import {pinyin} from "pinyin-pro";

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
    provinceClick(param) {
      this.$store.commit('clickProvinceName',param)
    },
    initChart() {
      this.chart = this.$echarts.init(document.getElementById("mapChart"));
      this.chart.setOption(this.options,true)
      this.chart.on('click',(params) => {
        console.log(params)
        this.provinceClick(pinyin(params.name,{toneType: 'none'}).replace(/\b[a-z]/g,function (match) {
          return match.toUpperCase();
        }).replace(/\s*/g,""));
      })
    }
  }
}
</script>

<style>
</style>
