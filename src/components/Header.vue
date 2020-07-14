<template>
  <div class="container">
    <div class="row">
      <div class="col-6 text">
        <div class="row">
          <h1>{{text}}</h1>
        </div>
        <div class="row">
          <p>{{description}}</p>
        </div>
        <div class="row">
          <button>
            <span>{{button}}</span>
          </button>
        </div>
      </div>
      <div class="col-6">
        <img src="../../public/assets/Image 24.png" />
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
      button: ""
    };
  },
  mounted() {
    this.text = header.text;
    this.description = header.description;
    this.button = header.button;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.container {
  margin-bottom: 185px;
  .text {
    text-align: left;
    max-width: 440px;
    h1 {
      font-weight: 800;
      font-size: 50px;
      color: #650fba;
      margin-bottom: 40px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #7a7a7a;
      line-height: 30px;
      margin-bottom: 25px;
    }
    button {
      background-color: #650fba;
      border-radius: 10px;
      border: none;
      padding: 15px 50px;
      span {
        font-weight: 500;
        font-size: 18px;
        color: white;
      }
    }
  }
}
</style>