<template>
  <div id="chinaMap">
    <div class="bg-color-black">
      <MapChart width="900px"
                height="890px"
                :options="options"/>
    </div>
  </div>
</template>

<script>
import MapChart from "@/common/echart/map.vue";

export default {
  name: "ChinaMap",
  components: {MapChart},
  data() {
    return {
      options: {
        tooltip: {
          formatter(params) {
            // params.data 就是series配置项中的data数据遍历
            let localValue = 0
            if (params.data) {
              localValue = params.data.value
            }
            let htmlStr = ` <div style='font-size:18px;margin-bottom: 8px'> ${params.name} : ${localValue}</div> `
            return htmlStr
          },
          backgroundColor: "#ff7f50",//提示标签背景颜色
          textStyle: {color: "#fff"} //提示标签字体颜色
        },
        visualMap: { // 左下角的颜色区域
          type: 'piecewise', // 定义为分段型 visualMap
          min: 0,
          max: 1000,
          itemWidth: 40,
          bottom: 60,
          left: 20,
          pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
            {gt: 900, lte: 1000, label: '非常好', color: '#6ad86e'}, // (900, 1000]
            {gt: 500, lte: 900, label: '正常', color: '#9adcfa'}, // (500, 900]
            {gt: 310, lte: 500, label: '警告', color: '#ffeb3b'}, // (310, 500]
            {gt: 200, lte: 300, label: '较差', color: '#ff9800'}, // (200, 300]
            {gt: 10, lte: 200, label: '非常差', color: 'orangered'}, // (10, 200]
            {value: 0, label: '无数据', color: '#999'} // [0]
          ]
        },
        geo: { // https://echarts.apache.org/zh/option.html#geo
          map: 'china', // 使用 registerMap 注册的地图名称
          roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: true
          },
          itemStyle: { // 地图区域的多边形 图形样式。
            borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: { // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            label: {
              show: true
            },
            data: [
              {
                'name': '北京',
                'value': 599,
              }, {
                'name': '上海',
                'value': 142
              }, {
                'name': '黑龙江',
                'value': 44
              }, {
                'name': '新疆',
                'value': 999,
              }, {
                'name': '深圳',
                'value': 92
              }, {
                'name': '湖北',
                'value': 810
              }, {
                'name': '四川',
                'value': 453
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#chinaMap {
  padding: 20px 16px 16px;
  border-radius: 5px;

  .bg-color-black {
    border-radius: 10px;
  }
}
</style>