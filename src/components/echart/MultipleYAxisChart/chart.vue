<template>
  <div id="multipleYAxisChart">
    <div class="bg-color-black">
      <div class="d-flex jc-center">
        <Echart
            width="450px"
            height="433px"
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
  name: "multipleYAxisChart",
  data() {
    return {
      options: {
        title: {
          text: '人口自然增长率',
          left: 'center'
        },
        color: ['#F02FC2', '#956FD4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          top: '18%',
          right: '13%',
          left: '10%',
          bottom: '12%'
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['2011','2012', '2013','2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '净增长(万人)',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#956FD4"
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '增长率(%)',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#F02FC2"
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '人口净增长数(万人)',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                ])
              }
            },
            data: [ 827, 1010, 807, 924, 682, 909, 781, 531, 468, 205, 48 ]
          },
          {
            name: '人口自然增长率(‰)',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            yAxisIndex: 1,
            data: [ 6.13, 7.43, 5.9, 6.71, 4.93, 6.53, 5.58, 3.78, 3.32, 1.45, 0.34]
          }
        ]
      }
    };
  },
  components: {
    Echart
  },
}
</script>

<style lang="scss" scoped>

#multipleYAxisChart {
  padding: 16px;
  border-radius: 10px;

  .bg-color-black {
    height: 435px;
    border-radius: 10px;
  }
}
</style>