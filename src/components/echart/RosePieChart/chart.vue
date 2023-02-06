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
    return {
      options: {
        title: {
          text: '年龄结构',
          // subtext: '江苏省',
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
            radius: [30, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {value: 25, name: '0-14'},
              {value: 35, name: '15-64'},
              {value: 40, name: '65以上'},
            ]
          }
        ]
      }
    };
  },
  components: {
    Echart,
  },
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