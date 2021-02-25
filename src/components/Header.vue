<template>
  <div class="container">
    <div class="header">
      <div class="container-fluid">
        <div class="row hero">
          <div class="col">
            <img class="img-fluid rocket" :src="image" />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 text">
            <h1>{{ text }}</h1>
            <p>{{ description }}</p>
          </div>
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
  margin-top: 12rem;
  .text {
    text-align: left;
    margin-top: 3rem;
    h1 {
      font-size: 52px;
      color: #ef233c;
      margin-bottom: 5rem;
    }
    p {
      font-size: 20px;
      color: #51586D;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .col {
    img {
      margin-top: 8rem;
    }
  }
}
@media only screen and (max-width: 800px) {
  .header {
    margin-top: -3rem;
    .text {
      text-align: left;
      margin-top: 5rem;
      margin-bottom: -5rem;
      h1 {
        font-size: 52px;
        color: #ef233c;
        margin-bottom: 1rem;
      }
      p {
        font-size: 20px;
        color: #8d99ae;
      }
    }
  }
}
@media only screen and (max-width: 576px) {
  .header {
    margin-top: 0rem;
    .rocket{
      margin-top: 1rem;
    }
    .text {
      h1 {
        font-size: 40px;
      }
      p {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
</style>