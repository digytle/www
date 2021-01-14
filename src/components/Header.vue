<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row hero">
        <div class="col-md-6">
          <img class="img-fluid rocket" :src="image" />
        </div>
        <div class="col-md-6 text">
          <h1>{{ text }}</h1>
          <p>{{ description }}</p>
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
  margin-top: 12rem;
  .text {
    text-align: left;
    margin-top: 5rem;
    padding-left: 5rem;
    h1 {
      font-size: 52px;
      color:#EF233C;
      margin-bottom: 5rem;
      max-width: 535px;
      max-height: 135px;
    }
    p {
      font-size: 20px;
      color: #8d99ae;
      max-width: 516px;
    }
  }
}
// @media only screen and (max-width: 768px) {
//   .separator {
//     display: block;
//     .line {
//       width: 40px;
//     }
//   }
//   .header {
//     margin-top: 85px;
//     .row {
//       flex-direction: column-reverse;
//       .rocket {
//         margin: 0 auto;
//       }
//       .text {
//         margin: 0 auto;
//       }
//     }
//   }
// }
</style>