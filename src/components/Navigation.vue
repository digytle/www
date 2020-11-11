<template>
  <div
    class="row navigation"
    :style="{
      background:
        this.$route.path.startsWith('/person') ||
        this.$route.path.startsWith('/feature')
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
        <router-link to="#who-we-are" v-scroll-to="'#we-are'">{{
          secondComponent
        }}</router-link>
        <router-link to="#what-we-do" v-scroll-to="'#what-we-do'">{{
          thirdComponent
        }}</router-link>
        <router-link to="#latest-work" v-scroll-to="'#latest-work'">{{
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
  position: fixed;
  width: 102%;
  z-index: 1;
  color: #464646;
  font-weight: 500;
  font-family: $font__public;
  font-weight: 700;
  padding-top: 25px;
  max-width: 1366px;
  .logo {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding-left: 60px;
  }
  a {
    text-decoration: none;
    color: #333333;
    font-size: 14px;
    border: none;
    background-color: transparent;
    margin: 0 10px;
    font-weight: 500;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 60px;
    .router-link-exact-active {
      color: #650fba;
    }
  }
}
</style>