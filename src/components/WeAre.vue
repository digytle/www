<template>
  <div class="container" id="we-are">
    <div class="row items">
      <div class="col-6 text">
        <div class="row">
          <h2>{{text}}</h2>
        </div>
        <div class="row">
          <p>{{description}}</p>
        </div>
      </div>
      <div class="image">
        <img :src="image" />
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
      image: {},
    };
  },
  mounted() {
    this.text = weAre.text;
    this.description = weAre.description;
    this.image = weAre.image;
  },
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
    h2 {
      color: #2b2d42;
      margin-bottom: 40px;
    }
    p {
      color: #8d99ae;
      line-height: 30px;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      width: 500px;
    }
  }
  .image {
    margin-left: 290px;
  }
}
</style>