<template>
  <div class="body-box">
    <div class="left-box">
      <dv-border-box12 style="padding: 16px">
        <div class="bg-color-black">
          <div class="d-flex jc-center">
            <div class="left-0">
              <div class="province-text">
                <el-dropdown>
                  <span class="el-dropdown-link">下拉菜单 </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="left-1">
              <div class="outside">
                <span class="outside-text">基本养老保险</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('BasicPensionNumber')">参保人数</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('BasicPensionBalance')">收支结余</span>
              </div>
            </div>
            <div class="left-2">
              <div class="outside">
                <span class="outside-text">城乡居民社会养老保险</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('SocialPensionNumber')">参保人数</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('SocialPensionBalance')">收支结余</span>
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
              <component :is="index"></component>
            </div>
          </div>
        </div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
import EChart from "@/common/echart/index.vue";
import BasicPensionBalance from "@/views/pension/basic/balance.vue";
import BasicPensionNumber from "@/views/pension/basic/number.vue";
import SocialPensionBalance from "@/views/pension/social/balance.vue";
import SocialPensionNumber from "@/views/pension/social/number.vue";

export default {
  name: "pension_page",
  components: {SocialPensionNumber, SocialPensionBalance, BasicPensionNumber, BasicPensionBalance, EChart},
  data() {
    return {
      index: "BasicPensionNumber"
    }
  },
  methods: {
    changeIndex(curIndex) {
      this.index = curIndex;
      console.log(this.index)
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
        .el-dropdown-link {
          cursor: pointer;
        }
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