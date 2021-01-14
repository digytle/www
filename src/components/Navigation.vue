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
    <div class="col-6 logo">
      <router-link to="/">
        <img
          :src="
            this.$route.path.startsWith('/person') ||
            this.$route.path.startsWith('/feature')
              ? logoWhite
              : logoBlack
          "
          class="logo"
      /></router-link>
    </div>
    <div class="col-5 buttons">
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
    </div>
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
  width: 200%;
  color: #464646;
  margin-bottom: 100px;
  font-family: $font__menu;
  .logo {
    align-items: center;
    display: flex;
    padding-left: 35px;
    width: 330px;
  }
  a {
    text-decoration: none;
    color: #8D99AE;
    font-size: 17px;
    border: none;
    margin: 0 10px;
    font-weight: 300;
    padding-right: 3rem;
    margin-left: 0.8rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: -58%;
    margin-top: 12rem;
    .router-link-exact-active {
      color: #2B2D42;
    }
  }
}
</style>