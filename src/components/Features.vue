<template>
  <div class="container" id="features">
    <div class="col">
      <div class="title">
        <hr class="line">
        <h2>{{ headerText }}</h2>
      </div>
      <div class="row">
           <div
          class="col-lg-3 col-md-6 col-sm-9 info-cards"
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
  margin-top: 8rem;
  .title{
    margin-right: auto;
    margin-left: auto;
    hr{
        width: 250px;
        border-bottom: 4px solid #2B2D42;
        border-top: none;
    }
    h2{
        text-align: center;
        font-size: 50px;
        margin-top: -1rem;
        margin-bottom: 3rem;
    }
  }
  .info-cards {
    text-align: left;
    &:hover div {
      h3{
        background-color: transparent;
        margin-top: 0rem;
        padding-left: 0rem;
        width: 100%;
      }
    }
    a:hover {
      text-decoration: none;
    }
    .card{
      border: none;
    }
    h3 {
      color: #333333;
      margin-top: -3.5rem;
      padding-left: 1rem;
      padding-top: 0.5rem;
      width: 110%;
      height: 3rem;
      background-color: white;
      margin-bottom: 2rem;
      transition: 0.2s;
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
@media only screen and (max-width: 576px) {
  .card{
    margin-bottom: 2rem;
  }
}
</style>