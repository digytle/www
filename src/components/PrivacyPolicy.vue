<template>
  <div class="privacy-policy">
    <Navigation></Navigation>
    <div class="row privacy">
      <h1>{{ data.title }}</h1>
      <div class="content" v-for="section in data.content" :key="section.text">
        <h2>{{ section.sectionTitle }}</h2>
        <p>{{ section.text }}</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navigation from "./Navigation";
import navigation from "js-yaml-loader!../../content/navigation.yaml";
import Footer from "./Footer";
export default {
  name: "PrivacyPolicy",
  components: { Navigation, Footer },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/privacy.yaml`);
    this.logoText = navigation["logo-text"];
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.privacy-policy {
  .row {
    margin-right: 0;
  }
  .privacy {
    margin-left: 170px;
    text-align: left;
    h1 {
      margin-top: 100px;
      color: #2b2d42;
      margin-bottom: 100px;
    }
    .content {
      h2 {
        font-size: 30px;
        color: #2b2d42;
        margin-bottom: 30px;
      }
      p {
        width: 1025px;
        margin-bottom: 60px;
        color: #8d99ae;
      }
    }
  }
}
</style>