<template>
  <div class="body-box">
    <div class="left-body-box">
      <div class="content-box">
        <dv-border-box6>
          <div class="bg-color-black">
            <mechanism-understanding-degree/>
          </div>
        </dv-border-box6>
        <dv-border-box6>
          <div class="bg-color-black">
            <mechanism-impression/>
          </div>
        </dv-border-box6>
      </div>
      <div class="content-box">
        <dv-border-box6>
          <div class="bg-color-black">
            <retirement-place/>
          </div>
        </dv-border-box6>
        <dv-border-box6>
          <div class="bg-color-black">
            <main-carer/>
          </div>
        </dv-border-box6>
      </div>
    </div>
    <div class="right-body-box">
      <dv-border-box6>
        <div class="bg-color-black">
          <div class="title">各省养老机构数量</div>
          <dv-capsule-chart class="dv-cap-chart" :config="config" />
        </div>
      </dv-border-box6>
    </div>
  </div>
</template>

<script>
import MechanismUnderstandingDegree from "@/views/service/mechanism/UnderstandingDegree.vue";
import MechanismImpression from "@/views/service/mechanism/Impression.vue";
import RetirementPlace from "@/views/service/place.vue";
import MainCarer from "@/views/service/carer.vue";

export default {
  name: "service_page",
  components: {
    MainCarer,
    RetirementPlace, MechanismImpression, MechanismUnderstandingDegree
  },
  data() {
    return {
      config: {
        showValue: true,
        unit: "个",
        data: [{"name": "北京", "value": "785"}, {"name": "天津", "value": "590"}, {
          "name": "河北",
          "value": "2862"
        }, {"name": "山西", "value": "1425"}, {"name": "内蒙古", "value": "701"}, {
          "name": "辽宁",
          "value": "3096"
        }, {"name": "吉林", "value": "3017"}, {"name": "黑龙江", "value": "3334"}, {
          "name": "上海",
          "value": "917"
        }, {"name": "江苏", "value": "2344"}, {"name": "浙江", "value": "2060"}, {
          "name": "安徽",
          "value": "3296"
        }, {"name": "福建", "value": "1248"}, {"name": "江西", "value": "2186"}, {
          "name": "山东",
          "value": "2643"
        }, {"name": "河南", "value": "5412"}, {"name": "湖北", "value": "2431"}, {
          "name": "湖南",
          "value": "3011"
        }, {"name": "广东", "value": "2381"}, {"name": "广西", "value": "1398"}, {
          "name": "海南",
          "value": "269"
        }, {"name": "重庆", "value": "1743"}, {"name": "四川", "value": "4751"}, {
          "name": "贵州",
          "value": "1773"
        }, {"name": "云南", "value": "1099"}, {"name": "西藏", "value": "106"}, {
          "name": "陕西",
          "value": "1220"
        }, {"name": "甘肃", "value": "604"}, {"name": "青海", "value": "181"}, {
          "name": "宁夏",
          "value": "142"
        }, {"name": "新疆", "value": "952"}, {"name": "新疆兵团", "value": "247"}]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.body-box {
  height: 930px;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 2.3fr 1fr;

  .left-body-box {
    display: grid;
    grid-template-rows: repeat(2, 49%);
    grid-row-gap: 10px;

    .content-box {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(2, 49%);
      grid-column-gap: 10px;

      .bg-color-black {
        height: 430px;
        border-radius: 10px;
        margin: 16px;
      }
    }
  }

  .right-body-box {
    display: grid;
    margin-bottom: 5px;

    .bg-color-black {
      height: 900px;
      border-radius: 10px;
      margin: 16px;
      display: flex;
      flex-direction: column;

      .title {
        margin-top:10px;
        width: 100%;
        height: 50px;
        text-align: center;
      }
    }
  }

}
</style>