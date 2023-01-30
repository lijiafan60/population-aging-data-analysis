<template>
  <div class="body-box bg-color-black">
    <dv-border-box12 style="width: 500px">
    <div class="left-box">
      <div class="left-2">
        <div class="outside">
          <span class="outside-text">导航</span>
        </div>
        <div class="inside">
          <span class="inside-text">导肮1</span>
        </div>
        <div class="inside">
          <span class="inside-text">导航2</span>
        </div>
      </div>
      <div class="left-2">
        <div class="outside">
          <span class="outside-text">导航</span>
        </div>
        <div class="inside">
          <span class="inside-text">导肮3</span>
        </div>
        <div class="inside">
          <span class="inside-text">导航4</span>
        </div>
      </div>
    </div>
    </dv-border-box12>
    <div class="right-box">
      <dv-border-box-13>

      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
export default {
  name: "pension_page"
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
    display: grid;
    grid-template-rows: repeat(2, 50%);
    margin-right: 20px;
    .left-2 {
      margin-top: 120px;
      margin-left: 100px;
    }
    .outside {
      .outside-text {
        font-size: xxx-large;
      }
    }
    .inside {
      margin-top: 30px;
      margin-left: 50px;
      .inside-text {
        font-size: x-large;
      }
    }
  }

  .right-box {
    width: 1390px;
  }
}
.bg-color-black {
  border-radius: 10px;
}
</style>