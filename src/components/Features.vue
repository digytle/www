<template>
  <div class="container" id="features">
    <div class="col">
      <div class="title">
        <hr class="line" />
        <h2>{{ headerText }}</h2>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-12 info-cards"
          v-for="feature in features"
          :key="feature.name"
        >
          <router-link :to="`${feature.template}/${feature.link}`">
            <div class="card">
              <img class="card-img-top" :src="feature.image" />
              <div class="card-body">
                <h3>{{ feature.name }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from "js-yaml-loader!../../content/featurettes.yaml";
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
  margin-top: 3rem;
  .title {
    margin-bottom: 1rem;
    hr {
      width: 200px;
      border-bottom: 4px solid #2b2d42;
      border-top: none;
      margin-left: 0px;
    }
    h2 {
      color: #2b2d42;
      text-align: left;
      margin-top: -1rem;
    }
  }
  .info-cards {
    text-align: left;
    a:hover {
      text-decoration: none;
    }
    .card {
      border: none;
    }
    .card-body{
      margin-top: -3.5rem;
      h3 {
        color: #333333;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        background-color: white;
      }
      p {
        margin-top: 0rem;
        color: #51586D;
        font-size: 16px;
        line-height: 25px;
        font-family:  $font__menu;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>