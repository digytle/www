<template>
  <div class="container">
    <div class="row">
      <div class="col-12 row">
        <h1>{{headerText}}</h1>
        <p>{{headerDescription}}</p>
      </div>
      <div class="row">
        <div class="col-4" v-for="feature in features" :key="feature.name">
          <img src="../..//public/assets/Caterina_AboutPage.png" />
          <h3>{{feature.name}}</h3>
          <p>{{feature.description}}</p>
          <router-link :to="`featurette/${feature.link}`">Go to</router-link>
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

<style scoped>
.background {
  background-color: #c971f3;
}
</style>