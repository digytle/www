<template>
  <div id="what-we-do">
    <div
      id="carouselExampleControls"
      class="carousel"
      data-ride="carousel"
      data-interval="false"
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

          <b-img
            class="carousel-control-prev"
            href="#carouselExampleControls"
            data-slide="prev"
            :src="section.leftButton"
            @click="step--"
          ></b-img>
          <b-img
            class="carousel-control-next"
            href="#carouselExampleControls"
            data-slide="next"
            :src="section.rightButton"
            @click="step++"
          ></b-img>
        </div>
        <div v-if="Step()"></div>
        <div
          class="progress"
          :class="{
            firstBackground: step == 1,
            secondBackground: step == 2,
            thirdBackground: step == 3,
          }"
        >
          <div
            class="progress-bar"
            role="progressbar "
            aria-valuemax="100"
            :class="{
              firstSlide: step == 1,
              secondSlide: step == 2,
              thirdSlide: step == 3,
              fourthSlide: step == 4,
            }"
          ></div>
        </div>
        <div class="row numberOfStep">
          <p
            class="currentStep"
            :class="{
              firstPage: step == 1,
              secondPage: step == 2,
              thirdPage: step == 3,
              fourthPage: step == 4,
            }"
          >
            0{{ step }}/
          </p>
          <p
            class="allSteps"
            :class="{
              firstOfAll: step == 1,
              secondOfAll: step == 2,
              thirdOfAll: step == 3,
              fourthOfAll: step == 4,
            }"
          >
            04
          </p>
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
      sections: [],
      step: 1,
    };
  },
  methods: {
    Step() {
      if (this.step > 4) {
        this.step = 1;
      }
      if (this.step < 1) {
        this.step = 4;
      }
    },
  },
  mounted() {
    this.sections = WhatWeDo.sections;
    console.log(this.step);
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
#carouselExampleControls {
  margin: 70px auto 155px;
  position: relative;
  h2 {
    margin-bottom: 50px;
  }
  .carousel-control-next {
    position: absolute;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    top: 609px;
    right: 130px;
    opacity: 1;
    z-index: 0;
  }
  .carousel-control-prev {
    position: absolute;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    top: 609px;
    left: 1270px;
    opacity: 1;
    z-index: 0;
  }
  .numberOfStep {
    position: absolute;
    top: 610px;
    left: 200px;
    font-size: 40px;
    font-family: $font__public;
    .currentStep {
      &.firstPage {
        color: #edf2f4;
      }
      &.secondPage {
        color: #6e44ff;
      }
      &.thirdPage {
        color: #2b2d42;
      }
      &.fourthPage {
        color: #6e44ff;
      }
    }
    .allSteps {
      &.firstOfAll {
        color: #8d99ae;
      }
      &.secondOfAll {
        color: #edf2f4;
      }
      &.thirdOfAll {
        color: #d0d7df;
      }
      &.fourthOfAll {
        color: #8d99ae;
      }
    }
  }
  .progress {
    height: 4px;
    width: 800px;
    position: absolute;
    top: 620px;
    left: 330px;
    &.firstBackground {
      background-color: #8d99ae;
    }
    &.secondBackground {
      background-color: #edf2f4;
    }
    &.thirdBackground {
      background-color: #d0d7df;
    }
    .progress-bar {
      transition: none;
      &.firstSlide {
        width: 25%;
        background-color: #edf2f4;
      }
      &.secondSlide {
        width: 50%;
        background-color: #6e44ff;
      }
      &.thirdSlide {
        width: 75%;
        background-color: #2b2d42;
      }
      &.fourthSlide {
        width: 100%;
        background-color: #6e44ff;
      }
    }
  }
  .col-4 {
    text-align: left;
    position: absolute;
    top: 195px;
    left: 130px;
    &.first {
      h2 {
        color: #ef233c;
      }
      p {
        color: #edf2f4;
      }
    }
    &.second {
      h2 {
        color: #6e44ff;
      }
      p {
        color: #edf2f4;
      }
    }
    &.third,
    &.fourth {
      h2 {
        color: #2b2d42;
      }
      p {
        color: #8d99ae;
      }
    }
  }
  .col-5 {
    text-align: left;
    position: absolute;
    top: 120px;
    right: 80px;
    img {
      height: 435px;
    }
  }
}
</style>