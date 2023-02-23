<template>
  <div id="rosePieChart">
    <div class="bg-color-black">
      <div class="d-flex jc-center">
        <Echart
            width="368px"
            height="410px"
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
  name: "rosePieChart",
  data() {
    return {};
  },
  components: {
    Echart,
  },
  computed: {
    options() {
      return {
        title: {
          text: this.$store.state.year + ' 年全国年龄结构',
          left: 'center'
        },

        legend: {
          top: 'bottom'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '年龄结构',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 10,
            label: {
              show: false
            },
            data: this.$store.state.currentNationalAgeStructure
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