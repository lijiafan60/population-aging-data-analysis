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
          <dv-capsule-chart class="dv-cap-chart" :config="config"/>
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
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
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
    margin-left: 20px;

    .bg-color-black {
      height: 910px;
      border-radius: 10px;
      margin: 16px
    }
  }

}
</style>