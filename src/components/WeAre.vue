<template>
    <div class="container-fluid we-are" id="we-are">
      <div class="lines">
      <hr>
      <hr class="two">
      </div>
      <div class="row we-are">
        <div class="col-lg-6 col-md-12 col-sm-12 text">
          <h1>{{ title }}</h1>
          <p v-for="paragraph of text" :key="paragraph">{{ paragraph }}</p>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 image">
          <img class="img-fluid" :src="image" />
        </div>
      </div>
    </div>
  <!-- <div class="container" id="we-are">
    <div class="row items">
      <div class="col col-md-12 col-xl-6 text">
        <div class="row">
          <h2>{{ title }}</h2>
        </div>
        <p v-for="paragraph of text" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="image">
        <img :src="image" />
      </div>
    </div>
  </div> -->
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
.we-are {
  margin-top: 10rem;
  margin-bottom: 6rem;
  margin-left: 1rem;
  .lines{
    margin-bottom: -9rem;
    hr{
      border-bottom: 2px solid #EF233C;
      border-top: none;
    }
    .two{
      border-bottom: 7px solid #EF233C;
      width: 22rem;
      margin-top: -1.1rem;
      margin-left: 1.8rem;
      align-self: flex-start;
    }
  }
  .items {
    margin: 0 0 190px 0;
  }
  .text {
    width: 495px;
    h1 {
      font-size: 52px;
      text-align: left;
      color: #EF233C;
      max-width: 535px;
    }
    p {
      font-size: 17px;
      text-align: left;
      color: #8d99ae;
      max-width: 700px;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .text {
    p {
      margin-left: 0;
      margin-right: 2rem;
    }
  }
  .image{
    margin-left: -2rem;
  }
}

// @media only screen and (max-width: 768px) {
//   .container {
//     margin: 0 auto;
//     .text {
//       margin-left: 60px;
//       text-align: left;
//     }
//     .items {
//       flex-direction: column;
//     }
//     .image {
//       img {
//         margin-top: 55px;
//         // margin: 0 auto;
//       }
//     }
//   }
// }
</style>