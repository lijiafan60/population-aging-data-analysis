<template>
  <div id="my-select">
    <div class="title" @click="showOption=!showOption">
      <span>{{ choiceTitle }}</span>
      <span class="icon">﹀</span>
    </div>
    <div v-show="showOption">
      <div v-for="ch in options" :key="ch.key" @click="changeOption(ch.key)">
        {{ ch.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    options: {   // 接收父组件传入的所有选项
      type: Array,
      default() {
        return []; // 接收数据格式必须为：[{key:1,text:"X"}]
      },
    },
    value: {  // 接收父组件传入的当前值，名字必须value，这样父组件才能用v-model绑定
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showOption: false,// 控制是否显示下拉选框
    };
  },
  computed: {
    choiceTitle() {  // 当前选中的title
      let curOption = this.options.filter(item=>item.key == this.value)
      if (curOption.length > 0) return curOption[0].text
      return "请选择";
    },
  },
  methods: {
    changeOption(val) {
      this.$emit("input", val); // 传给父组件的事件名必须是input，这样才能用v-model绑定
      this.showOption = false; // 收起下拉框
    },
  }
}
</script>

<style lang="scss" scoped>
#my-select {
  display: inline-block;
  padding: 5px;
  cursor: default;
.title {
.icon {
  margin-left: 5px;
  vertical-align: middle;
}
}
}
</style>