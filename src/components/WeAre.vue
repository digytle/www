<template>
  <div class="container" id="we-are">
    <div class="row items col-12">
      <div class="col-6 col-md-12 col-xl-6 text">
        <div class="row">
          <h2>{{ title }}</h2>
        </div>

        <p v-for="paragraph of text" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="col-6 col-xl-6 image">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
import weAre from "js-yaml-loader!../../content/we.yaml";
export default {
  name: "WeAre",
  data() {
    return {
      title: "",
      text: "",
      image: "",
    };
  },
  mounted() {
    this.text = weAre.text;
    this.title = weAre.title;
    this.image = weAre.image;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.container {
  margin-right: 165px;
  .items {
    align-items: center;
    margin-bottom: 190px;
    margin-top: 185px;
    margin-right: 0;
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
      margin-right: 0;
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    .text {
      margin-left: 60px;
      text-align: left;
    }
    .items {
      flex-direction: column;
    }
    .image {
      img {
        margin-top: 55px;
        // margin: 0 auto;
      }
    }
  }
}
</style>