<template>
  <div id="testimonials">
    <h2 class="header">{{ header }}</h2>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div
          v-for="(section, index) in quotes"
          :key="index"
          class="carousel-item"
          :class="{ active: index == 0 }"
        >
          <div class="text">
            <img :src="bigQuote" />
            <p class="quote">{{ section.quote }}<img :src="smallQuote" /></p>
            <h4>{{ section.name }}</h4>
            <p class="position">{{ section.position }}</p>
          </div>
        </div>
      </div>
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
          :class="{ active: index == 0 }"
        ></li>
        <li
          :class="{ active: index == 1 }"
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
        ></li>
        <li
          :class="{ active: index == 2 }"
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script>
import Testimonials from "js-yaml-loader!../../content/testimonials.yaml";
export default {
  name: "WhatWeDo",
  data() {
    return {
      quotes: [],
      header: "",
      bigQuote: "",
      smallQuote: "",
    };
  },

  mounted() {
    this.quotes = Testimonials.quotes;
    this.header = Testimonials.header;
    this.bigQuote = Testimonials.bigQuote;
    this.smallQuote = Testimonials.smallQuote;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.header {
  margin-bottom: 70px;
}
#carouselExampleIndicators {
  .carousel-inner {
    .carousel-item {
      transition: none;
      .text {
        margin-left: 290px;
        text-align: left;
        .quote {
          font-size: 20px;
          width: 845px;
        }
        .position {
          color: #8d99ae;
        }
        h4 {
          margin-top: 40px;
        }
      }
    }
  }
  .carousel-indicators {
    display: block;
    margin-left: 115px;
    margin-bottom: 115px;
    li {
      background-color: #8d99ae;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      transition: none;
      &.active {
        background-color: #ef233c;
      }
    }
  }
}
</style>
