<template>
  <div class="background">
    <div class="container">
      <div class="col-12 row">
        <h1>{{headerText}}</h1>
        <p>{{headerDescription}}</p>
      </div>
      <div class="col-12 row" v-for="row of explanations" :key="row">
        <div class="col-6">
          <h3>{{row.text}}</h3>
          <p>{{row.description}}</p>
        </div>
        <div class="col-6">
          <img :src="row.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhatWeDo from "js-yaml-loader!../../content/what-we-do.yaml";
export default {
  name: "WhatWeDo",
  data() {
    return {
      headerText: "",
      headerDescription: "",
      explanations: []
    };
  },
  mounted() {
    this.headerText = WhatWeDo["header-text"];
    this.headerDescription = WhatWeDo["header-description"];
    this.explanations = WhatWeDo.explanations;
  }
};
</script>

<style scoped>
.background {
  background-color: #c971f3;
}
</style>