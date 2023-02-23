<template>
  <div class="timeline">
    <div class="item" @click="changeYear(2011)">
      <br>
      2011
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2012)">
      <br>
      2012
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2013)">
      <br>
      2013
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2014)">
      <br>
      2014
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2015)">
      <br>
      2015
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2016)">
      <br>
      2016
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2017)">
      <br>
      2017
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2018)">
      <br>
      2018
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2019)">
      <br>
      2019
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2020)">
      <br>
      2020
    </div>
    <div class="line"></div>
    <div class="item" @click="changeYear(2021)">
      <br>
      2021
    </div>
  </div>
</template>

<script>

export default {
  name: "TimeLine",
  methods: {
    changeYear(currentYear) {
      this.$store.commit("setYear",currentYear)
      this.$store.commit("getCurrentGdp")
    }
  }
}
</script>

<style lang="scss" scoped>

.timeline {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .item {
    width: 10px;
    height: 10px;
    background-color: blue;
    border-radius: 50%;
  }

  .line {
    width: 65px;
    height: 2px;
    transform: translateY(4px);
    background-color: white;
    justify-content: center;
  }
}
</style>