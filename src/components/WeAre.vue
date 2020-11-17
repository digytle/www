<template>
  <div class="container" id="we-are">
    <div v-if="separator" class="row separator">
      <hr class="line" />
      <p class="separator-text">{{ separator.toUpperCase() }}</p>
    </div>
    <div class="row items">
      <div class="col-6 col-md-12 col-xl-6 text">
        <div class="row">
          <h2>{{ title }}</h2>
        </div>

        <p v-for="paragraph of text" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="image">
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
      separator: "",
      title: "",
      text: "",
      image: "",
    };
  },
  mounted() {
    this.separator = weAre.separator;
    this.text = weAre.text;
    this.title = weAre.title;
    this.image = weAre.image;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.separator {
  display: none;
}
.container {
  margin-right: 165px;
  .items {
    align-items: center;
    margin: 0 0 190px 0;
  }
  .text {
    max-width: 500px;
    margin-left: 130px;
    margin-right: 300px;
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
    }
  }
}

@media only screen and (max-width: 768px) {
  .separator {
    display: block;
    text-align: left;
    position: absolute !important;
    left: 0;
    .line {
      width: 40px;
      position: absolute !important;
    }
    .separator-text {
      margin-left: 50px !important;
    }
  }
  .container {
    margin: 0 auto;
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