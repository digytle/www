<template>
  <div id="what-we-do">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="carousel-item"
          :class="{ active: index == 0 }"
        >
          <img
            v-if="section.background"
            :src="section.background"
            class="d-block w-100"
            alt="image1"
          />
          <div
            class="col-4"
            :class="{
              first: index == 0,
              second: index == 1,
              third: index == 2,
              fourth: index == 3,
            }"
          >
            <h2 v-if="section.header">{{ section.header }}</h2>
            <p v-if="section.description">{{ section.description }}</p>
          </div>
          <div class="col-5">
            <router-link to="/design/">
              <img v-if="section.image" :src="section.image" alt="image2" />
            </router-link>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          href="#carouselExampleControls"
          data-slide="prev"
        ></button>
        <button
          class="carousel-control-next"
          href="#carouselExampleControls"
          data-slide="next"
        ></button>
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
      sections: [],
    };
  },
  mounted() {
    this.sections = WhatWeDo.sections;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
#carouselExampleControls {
  margin: 70px auto 155px;
  position: relative;
  .carousel-control-next {
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
  .carousel-control-prev {
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
  .col-4 {
    text-align: left;
    position: absolute;
    bottom: 300px;
    left: 130px;
  }
  .col-5 {
    text-align: left;
    position: absolute;
    bottom: 200px;
    right: 80px;
  }
  .first {
    h2 {
      color: #ef233c;
    }
    p {
      color: #edf2f4;
    }
  }
  .second {
    h2 {
      color: #6e44ff;
    }
    p {
      color: #edf2f4;
    }
  }
  .third,
  .fourth {
    h2 {
      color: #2b2d42;
    }
    p {
      color: #8d99ae;
    }
  }
}
</style>