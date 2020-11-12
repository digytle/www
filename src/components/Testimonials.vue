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
          <div class="row">
            <div class="col-6 indicators">
              <div class="carousel-indicators">
                <div
                  class="row buttons"
                  v-for="(section, index) in quotes"
                  :key="index"
                  :class="{
                    active: index == selectedIndex,
                  }"
                  @click="selectedIndex = index"
                  data-target="#carouselExampleIndicators"
                  :data-slide-to="index"
                >
                  <b-img
                    data-target="#carouselExampleIndicators"
                    :data-slide-to="index"
                    class="button"
                    :src="section.button"
                    @click="selectedIndex = index"
                  ></b-img>
                  <div
                    class="position"
                    @click="selectedIndex = index"
                    data-target="#carouselExampleIndicators"
                    :data-slide-to="index"
                  >
                    <h4>{{ section.name }}</h4>
                    <p>{{ section.position }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text col-6">
              <img :src="bigQuote" />
              <p class="quote">{{ section.quote }}<img :src="smallQuote" /></p>
            </div>
          </div>
        </div>
      </div>
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
      selectedIndex: 0,
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
        text-align: left;
        height: 375px;
        background-color: #2b2d42;
        color: #ffffff;
        padding: 50px 0 70px 100px;
        .quote {
          font-size: 20px;
          width: 500px;
        }
      }
    }
  }
  .indicators {
    padding-right: 0;
    .carousel-indicators {
      display: contents;
      .buttons {
        justify-content: center;
        padding-top: 35px;
        opacity: 0.5;
        width: 100%;
        height: 125px;
        margin-right: 0;
        margin-left: 0;
        .position {
          text-align: left;
          p {
            color: #8d99ae;
          }
        }
        .button {
          background-color: #8d99ae;
          border-radius: 100%;
          width: 55px;
          height: 55px;
          margin-right: 30px;
          transition: none;
        }
        &.active {
          background-color: rgba(81, 88, 109, 0.06);
          opacity: 1;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  #carouselExampleIndicators {
    .carousel-inner {
      .carousel-item {
        transition: none;
        .text {
          padding: 50px 0 70px 50px;
          .quote {
            font-size: unset;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
