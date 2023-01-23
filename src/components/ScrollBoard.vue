<template>
  <div id="scrollBoard">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2 center">
        <span class="fs-xl text mx-2">任务完成排行榜</span>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ['组件', '分支'],
        data: [
          ['组件1', 'dev-1'],
          ['组件2', 'dev-2'],
          ['组件3', 'dev-3'],
          ['组件4', 'rea-1'],
          ['组件5', 'rea-2'],
          ['组件6', 'fix-2'],
          ['组件7', 'fix-4'],
          ['组件8', 'fix-7'],
          ['组件9', 'dev-2'],
          ['组件10', 'dev-9']
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [60],
        align: ['center']
      }
    }
  }
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   board: {
  //     type: Array,
  //   }
  // }
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
