<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(section, index) in explanations"
        :key="index"
        class="carousel-item"
        :class="{'active':index==0}"
      >
        <img :src="section.background" class="d-block w-100" alt="image1" />
        <h2>{{section.header}}</h2>
        <p>{{section.description}}</p>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import WhatWeDo from "js-yaml-loader!../../content/what-we-do.yaml";
export default {
  name: "WhatWeDo",
  data() {
    return {
      explanations: [],
    };
  },
  mounted() {
    this.explanations = WhatWeDo.explanations;
    console.log(this.explanations);
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
#carouselExampleControls {
  margin: 70px auto 155px;
}
</style>