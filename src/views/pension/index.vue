<template>
  <div class="body-box">
    <div class="left-box-1">
      <dv-border-box12 style="padding: 16px">
        <div class="bg-color-black">
          <div class="provinceBox">
            <div class="provinceItem" v-for="(province,index) in this.$store.state.allProvince" v-bind:key="province.name" @click="changeProvince(province.name,index)" ref="provinces">
              <span v-html="trans(province.name)"></span>
            </div>
          </div>
        </div>
      </dv-border-box12>
    </div>
    <div class="left-box-2">
      <dv-border-box12 style="padding: 16px">
        <div class="bg-color-black">
          <div class="d-flex jc-center">
            <div class="left-1">
              <div class="outside">
                <span class="outside-text">城镇职工基本养老保险</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('BasicPensionNumber')" ref="BasicPensionNumber">参保人数</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('BasicPensionBalance')" ref="BasicPensionBalance">收支结余</span>
              </div>
            </div>
            <div class="left-2">
              <div class="outside">
                <span class="outside-text">城乡居民社会养老保险</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('SocialPensionNumber')" ref="SocialPensionNumber">参保人数&实际领取</span>
              </div>
              <div class="inside">
                <span class="inside-text" @click="changeIndex('SocialPensionBalance')" ref="SocialPensionBalance">收支结余</span>
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
import MySelect from "@/components/Select.vue";

export default {
  name: "pension_page",
  components: {MySelect, SocialPensionNumber, SocialPensionBalance, BasicPensionNumber, BasicPensionBalance, EChart},
  data() {
    return {
      index: "BasicPensionNumber",
      preProvinceIndex: 0,
    }
  },
  methods: {
    changeIndex(curIndex) {
      if(curIndex === this.index) return;
      this.$refs[`${this.index}`].style.color = 'white';
      this.index = curIndex;
      this.$refs[`${this.index}`].style.color = 'green';
    },
    changeProvince(province,provinceIndex) {
      if(provinceIndex === this.preProvinceIndex) return;
      this.$refs.provinces[this.preProvinceIndex].style.color = 'white';
      this.$store.state.pensionProvince = province;
      this.preProvinceIndex = provinceIndex;
      this.$refs.provinces[provinceIndex].style.color = 'green';
    },
    trans(text) {
      if(text.length === 3) return text;
      else return (text[0] + "&nbsp;&nbsp;&nbsp;" + text[1]);
    }
  },
  mounted() {
    this.$refs.provinces[0].style.color = 'green';
    this.$refs.BasicPensionNumber.style.color = 'green';
  }
}
</script>

<style lang="scss" scoped>
.body-box {
  height: 930px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  .left-box-1 {
    width: 200px;
    margin-right: 20px;

    .bg-color-black {
      height: 900px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      .provinceBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .provinceItem {
          margin: 4.5px;
        }
        .provinceItem:hover {
          cursor: pointer;
        }
      }

    }

  }

  .left-box-2 {
    width: 300px;
    margin-right: 20px;

    .bg-color-black {
      height: 900px;
      border-radius: 10px;
    }

    .d-flex {
      flex-direction: column;
    }

    .left-1 {
      margin-top: 100px;
      margin-left: 10px;
    }

    .left-2 {
      margin-top: 120px;
      margin-left: 10px;
    }

    .outside {
      .outside-text {
        font-size:20px;
      }
    }

    .inside {
      margin-top: 50px;
      margin-left: 25px;
      .inside-text {
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