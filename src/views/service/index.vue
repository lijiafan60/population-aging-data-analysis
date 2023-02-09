<template>
  <div class="body-box">
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
      <dv-border-box6>
        <div class="bg-color-black">
          <number-in-city/>
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
      <dv-border-box6>
        <div class="bg-color-black">
          <number-in-countryside/>
        </div>
      </dv-border-box6>
    </div>
  </div>
</template>

<script>
import NumberInCity from "@/views/service/mechanism/NumberInCity.vue";
import NumberInCountryside from "@/views/service/mechanism/NumberInCountryside.vue";
import MechanismUnderstandingDegree from "@/views/service/mechanism/UnderstandingDegree.vue";
import MechanismImpression from "@/views/service/mechanism/Impression.vue";
import RetirementPlace from "@/views/service/place.vue";
import MainCarer from "@/views/service/carer.vue";

export default {
  name: "service_page",
  components: {
    MainCarer,
    RetirementPlace, MechanismImpression, MechanismUnderstandingDegree, NumberInCountryside, NumberInCity
  }
}
</script>

<style lang="scss" scoped>
.body-box {
  height: 930px;
  margin-top: 16px;
  display: grid;
  grid-template-rows: repeat(2, 50%);
  grid-row-gap: 10px;

  .content-box {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-column-gap: 10px;

    .bg-color-black {
      height: 432px;
      border-radius: 10px;
      margin: 16px;

    }
  }

}
</style>