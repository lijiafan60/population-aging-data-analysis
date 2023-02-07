<template>
  <div class="body-box">
    <div class="left-box">
      <dv-border-box12 style="padding: 16px">
        <div class="bg-color-black">
          <div class="d-flex jc-center">
            <div class="left-0">
              <div class="province-text">
                江苏省
              </div>
            </div>
            <div class="left-1">
              <div class="outside">
                <span class="outside-text">基本养老保险</span>
              </div>
              <div class="inside">
                <span class="inside-text">参保人数</span>
              </div>
              <div class="inside">
                <span class="inside-text">收支结余</span>
              </div>
            </div>
            <div class="left-2">
              <div class="outside">
                <span class="outside-text">城乡居民社会养老保险</span>
              </div>
              <div class="inside">
                <span class="inside-text">参保人数</span>
              </div>
              <div class="inside">
                <span class="inside-text">收支结余</span>
              </div>
            </div>
          </div>
        </div>
      </dv-border-box12>
    </div>
    <div class="right-box">
      <dv-border-box-13 style="padding: 16px">
        <div class="bg-color-black">
          <div class="d-flex jc-center">
            <div class="chart-div">
              <EChart height="800px" width="1250px" :options="options"></EChart>
            </div>
          </div>
        </div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
import EChart from "@/common/echart/index.vue";

export default {
  name: "pension_page",
  components: {EChart},
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['总人数', '在职人数', '离职人数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: '年份',
          boundaryGap: false,
          data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          type: 'value',
          name: '人数（千万）'
        },
        series: [
          {
            name: '总人数',
            type: 'line',
            stack: 'Total',
            data: [10, 15, 12.5, 5, 5, 5, 5]
          },
          {
            name: '在职人数',
            type: 'line',
            stack: 'Total',
            data: [22, 18, 19, 23, 29, 33, 31]
          },
          {
            name: '离职人数',
            type: 'line',
            stack: 'Total',
            data: [15, 23, 21, 15, 19, 13, 10]
          }
        ]
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.body-box {
  height: 930px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  .left-box {
    width: 500px;
    margin-right: 20px;

    .bg-color-black {
      height: 900px;
      border-radius: 10px;
    }

    .d-flex {
      flex-direction: column;
    }

    .left-0 {
      margin-top: 50px;
      margin-left: 50px;

      .province-text {
        font-size: x-large;
        text-align: center;
      }
    }

    .left-1 {
      margin-top: 100px;
      margin-left: 50px;
    }

    .left-2 {
      margin-top: 120px;
      margin-left: 50px;
    }

    .outside {
      .outside-text {
        font-size: xx-large;
      }
    }

    .inside {
      margin-top: 50px;
      margin-left: 50px;

      .inside-text {
        font-size: x-large;
      }
    }
  }

  .right-box {
    width: 1390px;

    .bg-color-black {
      height: 900px;
      border-radius: 10px;

      .chart-div {
        height: 900px;
        margin-top: 100px;
        margin-bottom: 100px;
      }
    }
  }
}

</style>