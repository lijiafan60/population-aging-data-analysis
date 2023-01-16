<template>
  <div>
    <chart :cdata="cdata"/>
  </div>
</template>

<script>
import chart from "./chart.vue";

export default {
  name: "templateIndex",
  data() {
    return {
      cdata: null,
    }
  },
  components: {
    chart
  },
  mounted() {

  },
  function: {

  }
}
</script>

<style scoped>

</style>