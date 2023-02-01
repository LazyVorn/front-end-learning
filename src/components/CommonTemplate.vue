<template>
  <div class="common-template-wrap">
    <div class="desc-box">
      <div class="title">题目</div>
      <img class="desc-image" :src="imageUrl" alt="" />
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonTemplate",
  components: {},
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.common-template-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  padding: 16px;
  .desc-box {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #dddee1;
    .title {
      padding: 10px;
      font-weight: bold;
    }
    .desc-image {
      width: 200px;
      height: 200px;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
</style>
