<template>
  <div id="rosePieChart">
    <div class="bg-color-black">
      <div class="d-flex jc-center">
        <Echart
            id="rosePieChart"
            class="rosePieChart"
            width="368px"
            height="433px"
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
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '45%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              {value: 30, name: 'rose 1'},
              {value: 20, name: 'rose 2'},
              {value: 32, name: 'rose 3'},
              {value: 30, name: 'rose 4'},
              {value: 28, name: 'rose 5'},
              {value: 40, name: 'rose 6'},
              {value: 22, name: 'rose 7'},
              {value: 18, name: 'rose 8'}
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

$box-width: 400px;
$box-height: 465px;

#rosePieChart {
  padding: 16px;
  width: $box-width;
  height: $box-height;
  border-radius: 10px;

  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
;
}
</style>