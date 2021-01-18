<template>
  <div
    class="row navigation"
    :style="{
      background: this.$route.path.startsWith('/featurettes')
        ? 'linear-gradient(90deg, transparent 48%, #FFFFFF 41%)'
        : 'white',
    }"
    id="navigation"
  >
    <div class="col-md-6 logo">
      <router-link to="/">
        <img
          :src="
            this.$route.path.startsWith('/person') ||
            this.$route.path.startsWith('/feature')
              ? logoWhite
              : logoBlack
          "
          class="img-fluid logo"
      /></router-link>
    </div>
    <nav class="navbar navbar-expand-md navbar-light mainnav">
      <div class="container-fluid asd">
        <button
          class="navbar-toggler navbarsmall"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navlist" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <router-link class="li" to="/" v-scroll-to="'#navigation'">{{
              firstComponent
            }}</router-link>
            <router-link class="li" to="#WeAre" v-scroll-to="'#we-are'">{{
              secondComponent
            }}</router-link>
            <router-link
              class="li"
              to="#latest-work"
              v-scroll-to="'#latest-work'"
              >{{ thirdComponent }}</router-link
            >
            <router-link
              class="li"
              to="#YearSummarised"
              v-scroll-to="'#YearSummarised'"
              >{{ fourthComponent }}</router-link
            >
            <router-link
              class="li"
              to="#featurette"
              v-scroll-to="'#features'"
              >{{ fifthComponent }}</router-link
            >
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="col-md-5 buttons">
      <div class="row">
        <router-link to="/" v-scroll-to="'#navigation'">{{
          firstComponent
        }}</router-link>
        <router-link to="#WeAre" v-scroll-to="'#we-are'">{{
          secondComponent
        }}</router-link>
        <router-link to="#latest-work" v-scroll-to="'#latest-work'">{{
          thirdComponent
        }}</router-link>
        <router-link to="#YearSummarised" v-scroll-to="'#YearSummarised'">{{
          fourthComponent
        }}</router-link>
        <router-link to="#featurette" v-scroll-to="'#features'">{{
          fifthComponent
        }}</router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import navigation from "js-yaml-loader!../../content/navigation.yaml";
export default {
  name: "Navigation",
  data() {
    return {
      logoBlack: {},
      logoWhite: {},
      firstComponent: "",
      secondComponent: "",
      thirdComponent: "",
      fourthComponent: "",
      fifthComponent: "",
    };
  },
  mounted() {
    this.logoBlack = navigation.logoBlack;
    this.logoWhite = navigation.logoWhite;
    this.firstComponent = navigation.firstComponent;
    this.secondComponent = navigation.secondComponent;
    this.thirdComponent = navigation.thirdComponent;
    this.fourthComponent = navigation.fourthComponent;
    this.fifthComponent = navigation.fifthComponent;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.navigation {
  height: 60px;
  background-color: white;
  color: #464646;
  margin-bottom: 100px;
  font-family: $font__menu;
  .logo {
    align-items: center;
    display: flex;
    padding-left: 35px;
    width: 330px;
    margin-top: 1rem;
    &:hover {
      width: 310px;
      transition: 0.4s;
    }
  }
  a {
    text-decoration: none;
    color: #8d99ae;
    font-size: 17px;
    border: none;
    margin: 0 10px;
    font-weight: 300;
  }
  .buttons {
    margin-top: 12rem;
    margin-left: -44rem;
    .router-link-exact-active {
      color: #2b2d42;
    }
  }
  .mainnav {
    position: absolute;
    margin-top: 8rem;
    margin-left: 2.5rem;
  }
  .navbarsmall {
    border: none;
    margin-top: -13rem;
  }
}
@media only screen and (max-width: 768px) {
  .navlist {
    z-index: 1;
    width: 100vw;
    background-color: white;
    margin-top: -2.5rem;
    margin-left: -2rem;
  }
  .logo {
    margin-left: 1rem;
  }
  .navigation {
    .mainnav {
      position: absolute;
      margin-top: 10rem;
      margin-left: 2.5rem;
    }
  }
}
</style>