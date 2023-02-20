<template>
  <div class="timeline">
    <div class="item">
      <br>
      2011
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2012
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2013
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2014
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2015
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2016
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2017
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2018
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2019
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2020
    </div>
    <div class="line"></div>
    <div class="item">
      <br>
      2021
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine"
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