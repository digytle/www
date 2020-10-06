<template>
  <div class="header">
    <div class="row">
      <div class="col-6">
        <img class="rocket-image" :src="image" />
      </div>
      <div class="col-6 text">
        <div class="row">
          <h1>{{ text }}</h1>
        </div>
        <div class="row">
          <p>{{ description }}</p>
        </div>
        <img :src="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content/header.yaml";
export default {
  name: "Header",
  data() {
    return {
      text: "",
      description: "",
      image: {},
      arrow: {},
    };
  },
  mounted() {
    this.text = header.text;
    this.description = header.description;
    this.image = header.image;
    this.arrow = header.arrow;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.header {
  margin-top: 100px;
  .rocket-image {
    width: 650px;
    height: 325px;
  }
  .text {
    margin-top: 105px;
    text-align: left;
    h1 {
      font-size: 52px;
      color: #d90429;
      margin-bottom: 40px;
      font-weight: 500;
      max-width: 535px;
      max-height: 135px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #8d99ae;
      margin-bottom: 25px;
      margin-top: 30px;
      max-width: 516px;
      max-height: 78px;
    }
  }
}
</style>