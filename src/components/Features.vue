<template>
  <div class="container" id="features">
    <div class="row">
      <div class="col-12 row header-text">
        <h1>{{headerText}}</h1>
      </div>
      <div class="col-12 row header-text">
        <p>{{headerDescription}}</p>
      </div>
      <div class="row">
        <div class="col-4 info-cards" v-for="feature in features" :key="feature.name">
          <router-link :to="`featurette/${feature.link}`">
            <div>
              <img :src="feature.image" />
              <h3>{{feature.name}}</h3>
              <p>{{feature.description}}</p>
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
      features: []
    };
  },
  mounted() {
    this.headerText = Features["header-text"];
    this.headerDescription = Features["header-description"];
    this.features = Features.features;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.container {
  .header-text {
    justify-content: center;
    h1 {
      font-weight: 700;
      font-size: 40px;
      margin-bottom: 40px;
      color: #333333;
    }
    p {
      width: 860px;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 60px;
      color: #7a7a7a;
    }
  }
  .info-cards {
    text-align: left;
    div {
      padding: 25px;
    }
    &:hover div {
      background-color: #c971f3;
      h3,
      p {
        color: white;
      }
    }
    a:hover {
      text-decoration: none;
    }
    h3 {
      font-weight: 700;
      font-size: 25px;
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