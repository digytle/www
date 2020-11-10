<template>
  <div class="header">
    <div class="row">
      <div class=".col-6 .col-sm-6 .col-md-6 .col-lg-12 .col-xl-12">
        <img class="rocket" :src="image" />
      </div>
      <div class="text">
        <h1>{{ text }}</h1>
        <p>{{ description }}</p>
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
  .rocket {
    width: 650px;
    height: 325px;
    margin-right: 65px;
    margin-left: 30px;
  }
  .text {
    text-align: left;
    h1 {
      font-size: 52px;
      color: #d90429;
      margin-bottom: 30px;
      font-weight: 500;
      max-width: 535px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #8d99ae;
      margin-bottom: 55px;
      margin-top: 30px;
      max-width: 516px;
      max-height: 78px;
    }
  }
}
@media only screen and (max-width: 768px) {
  .header {
    margin-top: 85px;
    .row {
      flex-direction: column-reverse;
      .rocket {
        margin: 0 auto;
      }
      .text {
        margin: 0 auto;
      }
    }
  }
}
</style>