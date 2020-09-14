<template>
  <div class="header">
    <div class="row">
      <div class="col-6">
        <img :src="image" />
      </div>
      <div class="col-6 text">
        <div class="row">
          <h1>{{text}}</h1>
        </div>
        <div class="row">
          <p>{{description}}</p>
        </div>
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
    };
  },
  mounted() {
    this.text = header.text;
    this.description = header.description;
    this.image = header.image;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.header {
  margin-top: 100px;
  .text {
    margin-top: 105px;
    text-align: left;
    h1 {
      font-size: 52px;
      color: #d90429;
      margin-bottom: 40px;
      font-family: $font__title;
      font-weight: 500;
      max-width: 535px;
      max-height: 135px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #8d99ae;
      margin-bottom: 25px;
      font-family: $font__public;
      max-width: 516px;
      max-height: 78px;
    }
  }
}
</style>