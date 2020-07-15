<template>
  <div class="container" id="we-are">
    <div class="row items">
      <div class="col-6 text">
        <div class="row">
          <h1>{{text}}</h1>
        </div>
        <div class="row">
          <p>{{description}}</p>
        </div>
      </div>
      <div class="col-6">
        <div class="empty-box">
          <img :src="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weAre from "js-yaml-loader!../../content/we-are.yaml";
export default {
  name: "WeAre",
  data() {
    return {
      text: "",
      description: "",
      image: {}
    };
  },
  mounted() {
    this.text = weAre.text;
    this.description = weAre.description;
    this.image = weAre.image;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.container {
  .items {
    align-items: center;
    margin-bottom: 190px;
    margin-top: 185px;
  }
  .text {
    h1 {
      font-weight: 700;
      color: #650fba;
      font-size: 40px;
      margin-bottom: 40px;
    }
    p {
      color: #464646;
      line-height: 30px;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      width: 500px;
    }
  }
  .empty-box {
    width: 400px;
    height: 300px;
    border: 1px solid #707070;
    margin-left: auto;
  }
}
</style>