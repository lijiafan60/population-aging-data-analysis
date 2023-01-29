<template>
  <div id="scrollBoard">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2 center">
        <span class="fs-xl text mx-2">{{title}}</span>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ' '
    },
    config: {
      type: Object,
      required: true,
      default: ()=>{}
    }
  }
}
</script>

<style lang="scss" scoped>
#scrollBoard {
  padding: 20px 16px 16px;
  border-radius: 5px;

  .bg-color-black {
    border-radius: 10px;
  }

  .text {
    color: #c3cbde;
  }

  .body-box {
    border-radius: 10px;
    overflow: hidden;

    .dv-scr-board {
      width: 400px;
      height: 400px;
    }
  }
}
</style>
