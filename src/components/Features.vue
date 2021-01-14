<template>
  <div class="container" id="features">
    <div class="col col-lg-12 col-sm-5">
      <div class="title">
        <hr class="line">
        <h2>{{ headerText }}</h2>
      </div>
      <div class="row">
        <div
          class="col-md-3 info-cards"
          v-for="feature in features"
          :key="feature.name"
        >
          <router-link :to="`${feature.template}/${feature.link}`">
            <div>
              <img :src="feature.image" />
              <h3>{{ feature.name }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from "js-yaml-loader!../../content/features.yaml";
export default {
  name: "Features",
  data() {
    return {
      headerText: "",
      headerDescription: "",
      features: [],
    };
  },
  mounted() {
    this.headerText = Features["header-text"];
    this.headerDescription = Features["header-description"];
    this.features = Features.features;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.container {
  .title{
    margin-right: auto;
    margin-left: auto;
    hr{
        width: 250px;
        border-bottom: 6px solid #2B2D42;
        margin-top: 10rem;
    }
    h2{
        text-align: center;
        font-size: 50px;
        margin-top: 0px;
        margin-bottom: 3rem;
    }
  }
  .info-cards {
    text-align: left;
    div {
      padding: 25px;
    }
    &:hover div {
      background-color: #2b2d42;
      h3,
      p {
        color: white;
      }
    }
    a:hover {
      text-decoration: none;
    }
    h3 {
      color: #333333;
      margin: 20px 0;
    }
    p {
      font-weight: 300;
      color: #7a7a7a;
      font-size: 16px;
      line-height: 25px;
    }
    img {
      width: 100%;
    }
  }
}
</style>