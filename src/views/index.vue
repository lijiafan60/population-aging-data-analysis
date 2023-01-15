<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10"/>
          <div class="d-flex">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor"/>
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']"/>
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s"/>
        </div>

        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
            </div>
            <div class="react-left ml-3">
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right mr-3 react-l-s">
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
            </div>
          </div>
        </div>

        <div class="body-box">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import drawMixin from "../utils/drawMixin";
export default {
  name: "index_page",
  mixins: [ drawMixin ],
  data() {
    return {
      loading: true,
      decorationColor: ['#568aea', '#000000']
    }
  },
  components: {},
  mounted() {
    this.cancelLoading()
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>