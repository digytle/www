<template>
  <div
    class="row navigation"
    :style="{'background': this.$route.path.startsWith('/featurette') ? 'linear-gradient(90deg, transparent 48%, #FFFFFF 41%)' : 'white'}"
    id="navigation"
  >
    <div class="col-6 logo">
      <h1 class="logo">{{logoText}}</h1>
    </div>
    <div class="col-5 buttons">
      <div class="row">
        <router-link to="/" v-scroll-to="'#navigation'">{{firstComponent}}</router-link>
        <router-link to="#who-we-are" v-scroll-to="'#we-are'">{{secondComponent}}</router-link>
        <router-link to="#what-we-do" v-scroll-to="'#what-we-do'">{{thirdComponent}}</router-link>
        <router-link to="#latest-work" v-scroll-to="'#latest-work'">{{fourthComponent}}</router-link>
        <router-link to="#featurette" v-scroll-to="'#features'">{{fifthComponent}}</router-link>
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
      logoText: "",
      firstComponent: "",
      secondComponent: "",
      thirdComponent: "",
      fourthComponent: "",
      fifthComponent: ""
    };
  },
  mounted() {
    this.logoText = navigation["logo-text"];
    this.firstComponent = navigation.firstComponent;
    this.secondComponent = navigation.secondComponent;
    this.thirdComponent = navigation.thirdComponent;
    this.fourthComponent = navigation.fourthComponent;
    this.fifthComponent = navigation.fifthComponent;
  }
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
  margin-bottom: 100px;
  font-family: $font__public;
  font-weight: 700;
  .logo {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    h1 {
      font-weight: 700;
      font-size: 25px;
      margin-left: 60px;
    }
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