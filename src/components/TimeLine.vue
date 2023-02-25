<template>
  <div class="timeline">
    <div v-for="index in 21" :key="index" :id="generateId(index)" :class="generateClass(index)"
         @click="changeYear(index)" ref="timeLineItem">
      <br>
      <span class="item-text">{{ text(index) }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "TimeLine",
  data() {
    return {
      begin: 2011,
      end: 2021,
      currentIndex: 1,
    }
  },
  methods: {
    changeYear(index) {
      if (index % 2 === 0 || this.currentIndex === index) return;

      let pel = this.$refs.timeLineItem[this.currentIndex - 1];
      let el = this.$refs.timeLineItem[index - 1];
      el.style.backgroundColor = "green";
      pel.style.backgroundColor = "white";
      this.currentIndex = index;

      let currentYear = index / 2 - 0.5 + this.begin;
      this.$store.commit("setYear", currentYear)
      this.$store.commit("getCurrentGdp")
      this.$store.commit("getCurrentDependencyRatio")
      this.$store.commit("getCurrentNationalAgeStructure")
    },
    generateId(index) {
      if (index % 2 === 1) {
        return "item-" + (index / 2 + 0.5);
      } else {
        return "line-" + index / 2;
      }
    },
    generateClass(index) {
      return (index % 2 === 1 ? "item" : "line")
    },
    text(index) {
      let text = (index % 2 === 1 ? (index / 2 - 0.5 + this.begin) : "")
      return "\n" + text;
    }
  },
  mounted() {
    this.$refs.timeLineItem[0].style.backgroundColor = "green";
  }
}
</script>

<style lang="scss" scoped>

.timeline {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .item {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;

    .item-text {
      width: 15px;
      height: 8px;
      position: relative;
      left: -8px;

    }
  }

  .item:hover {
    cursor: pointer;
  }

  .line {
    width: 65px;
    height: 1px;
    background-color: grey;
  }
}
</style>