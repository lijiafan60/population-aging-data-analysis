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
        <div class="bg-color-black"></div>
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