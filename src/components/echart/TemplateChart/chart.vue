<template>
  <div>
    <Echart
        id="temp"
        class="temp"
        width="10px"
        height="10px"
        :options="options"
    ></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart/index.vue";

export default {
  name: "templateChart",
  data() {
    return {
      options: {}
    };
  },
  components: {
    Echart
  },

  /*父子组件通信传值
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler(newData) {
      },
      immediate: true,
      deep: true
    }
  }
   */
}
</script>

<style scoped>

</style>