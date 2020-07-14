<template>
  <div>
    <Navigation></Navigation>
    <div class="row">
      <div class="image"></div>
      <div class="col-6 info">
        <h1>{{data.title}}</h1>
        <p>{{data.description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div class="row" v-for="section in data.sections" :key="section">
          <p class="col-6">{{section.description}}</p>
          <img class="col-6" :src="section.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "js-yaml-loader!../../content/navigation.yaml";
import Navigation from "./Navigation";
export default {
  name: "Featurette",
  components: { Navigation },
  data() {
    return {
      data: {},
      logoText: "",
      home: "",
      about: "",
      work: "",
      contacts: ""
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
    this.logoText = navigation["logo-text"];
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.image {
  width: 600px;
  height: 660px;
  background-color: #c5c5c5;
  h1 {
    margin-left: 75px;
    margin-top: 30px;
    text-align: left;
    font-family: $font__public;
    font-weight: 700;
    font-size: 25px;
    z-index: 1;
  }
}
.info {
  margin-top: 130px;
  margin-left: 60px;
  text-align: left;
  p {
    margin-top: 50px;
    width: 580px;
    line-height: 30px;
  }
}
.container {
  margin-top: 150px;
  .row {
    margin-bottom: 130px;
    align-items: center;
    p {
      text-align: left;
      line-height: 30px;
      font-size: 16px;
      max-width: 500px;
    }
    img {
      width: 500px;
      height: 300px;
      margin-left: auto;
    }
  }
}
</style>