<template>
  <div id="chinaMap">
    <MapChart width="900px"
              height="820px"
              :options="options"/>
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
          backgroundColor: "#f5eebf",//提示标签背景颜色
          textStyle: {color: "#1f3179"} //提示标签字体颜色
        },
        visualMap: { // 左下角的颜色区域
          type: 'piecewise', // 定义为分段型 visualMap
          min: 0,
          max: 1000,
          itemWidth: 40,
          bottom: 60,
          left: 20,
          pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
            {gt: 80, lte: 100, label: '>80', color: '#4dc72e'}, // (500, 900]
            {gt: 75, lte: 80, label: '75~80', color: '#60ecd2'}, // (310, 500]
            {gt: 70, lte: 75, label: '70~75', color: '#44b2e5'}, // (200, 300]
            {gt: 0, lte: 70, label: '<70', color: '#937dcc'},
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
            name: '平均预期寿命(岁)', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            label: {
              show: true
            },
            data: [{"name": "北京", "value": "80.18"}, {"name": "天津", "value": "78.89"}, {
              "name": "河北",
              "value": "74.97"
            }, {"name": "山西", "value": "74.92"}, {"name": "内蒙古", "value": "74.44"}, {
              "name": "辽宁",
              "value": "76.38"
            }, {"name": "吉林", "value": "76.18"}, {"name": "黑龙江", "value": "75.98"}, {
              "name": "上海",
              "value": "80.26"
            }, {"name": "江苏", "value": "76.63"}, {"name": "浙江", "value": "77.73"}, {
              "name": "安徽",
              "value": "75.08"
            }, {"name": "福建", "value": "75.76"}, {"name": "江西", "value": "74.33"}, {
              "name": "山东",
              "value": "76.46"
            }, {"name": "河南", "value": "74.57"}, {"name": "湖北", "value": "74.87"}, {
              "name": "湖南",
              "value": "74.7"
            }, {"name": "广东", "value": "76.49"}, {"name": "广西", "value": "75.11"}, {
              "name": "海南",
              "value": "76.3"
            }, {"name": "重庆", "value": "75.7"}, {"name": "四川", "value": "74.75"}, {
              "name": "贵州",
              "value": "71.1"
            }, {"name": "云南", "value": "69.54"}, {"name": "西藏", "value": "68.17"}, {
              "name": "陕西",
              "value": "74.68"
            }, {"name": "甘肃", "value": "72.23"}, {"name": "青海", "value": "69.96"}, {
              "name": "宁夏",
              "value": "73.38"
            }, {"name": "新疆", "value": "72.35"}, {"name": "香港","value":"0"},{"name":"台湾","value":"0"},{"name":"澳门","value":"0"}]
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
}
</style>