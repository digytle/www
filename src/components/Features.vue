<template>
  <div class="container">
    <div class="row">
      <div class="col-12 row">
        <h1>{{headerText}}</h1>
        <p>{{headerDescription}}</p>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="../..//public/assets/Caterina_AboutPage.png" />
          <h3>{{name1}}</h3>
          <p>{{description1}}</p>
        </div>
        <div class="col-4 background">
          <img src="../..//public/assets/41v5mLXBRaL.png" />
          <h3>{{name2}}</h3>
          <p>{{description2}}</p>
        </div>
        <div class="col-4">
          <img src="../..//public/assets/maxresdefault.png" />
          <h3>{{name3}}</h3>
          <p>{{description3}}</p>
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
      name1: "",
      description1: "",
      name2: "",
      description2: "",
      name3: "",
      description3: ""
    };
  },
  mounted() {
    this.headerText = Features["header-text"];
    this.headerDescription = Features["header-description"];
    this.name1 = Features.name1;
    this.description1 = Features.description1;
    this.name2 = Features.name2;
    this.description2 = Features.description2;
    this.name3 = Features.name1;
    this.description3 = Features.description3;
  }
};
</script>

<style scoped>
.background {
  background-color: #c971f3;
}
</style>