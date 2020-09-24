<template>
  <div class="design">
    <Navigation></Navigation>
    <div class="row">
      <div class="image">
        <img :src="data.image" />
      </div>
      <div class="info">
        <h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
      </div>
    </div>
    <div class="information">
      <h2>{{ data.infoTitle }}</h2>
      <p>{{ data.infoDescription }}</p>
    </div>

    <div
      class="row first col-6"
      v-for="section in data.firstSection"
      :key="section"
    >
      <h3>{{ section.title }}</h3>
      <p>{{ section.description }}</p>
      <h4>{{ section.subTitle }}</h4>
      <p>{{ section.subDescription }}</p>
      <img class="first" :src="section.image" />
    </div>
    <div
      class="row second"
      v-for="section in data.secondSection"
      :key="section"
    >
      <img class="blits" :src="section.image" />
      <div>
        <h3>{{ section.title }}</h3>
        <p>{{ section.description }}</p>
        <h4>{{ section.subTitle }}</h4>
        <p>{{ section.subDescription }}</p>
      </div>
      <div
        class="row third"
        v-for="section in data.thirdSection"
        :key="section"
      >
        <div>
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <h4>{{ section.subTitle }}</h4>
          <p>{{ section.subDescription }}</p>
        </div>
        <img class="access" :src="section.image" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import navigation from "js-yaml-loader!../../content/navigation.yaml";
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  name: "Featurette",
  components: { Navigation, Footer },
  data() {
    return {
      data: {},
      logoText: "",
      home: "",
      about: "",
      work: "",
      contacts: "",
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/design.yaml`);
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
.design {
  text-align: left;
  .image {
    margin-left: 15px;
  }
  .info {
    margin-top: 130px;
    margin-left: 170px;
    h1 {
      color: #6e44ff;
      margin-top: 30px;
      z-index: 1;
    }
    p {
      margin-top: 50px;
      width: 590px;
      color: #8d99ae;
      font-weight: 400;
    }
  }
  .information {
    margin-top: 175px;
    margin-bottom: 175px;
    h2 {
      color: #d90429;
      text-align: center;
    }
    p {
      color: #8d99ae;
      width: 950px;
      margin: 0 auto;
    }
  }

  .row {
    align-items: center;
  }
  .first {
    margin-left: 145px;
    margin-right: 20px;
    p {
      max-width: 500px;
      color: #8d99ae;
    }
    h3 {
      width: 480px;
    }
    h4 {
      width: 480px;
      color: #ef233c;
    }
  }
  .second {
    margin-top: 200px;
    margin-left: 30px;
    margin-right: 105px;

    p {
      max-width: 500px;
      color: #8d99ae;
    }
    h3 {
      width: 480px;
    }
    h4 {
      width: 480px;
      color: #ef233c;
    }
    .blits {
      margin-left: 30px;
      margin-right: 125px;
    }
  }
  .third {
    margin-left: 140px;
    margin-top: 200px;
    p {
      max-width: 500px;
      color: #8d99ae;
    }
    h3 {
      width: 480px;
    }
    h4 {
      width: 480px;
      color: #ef233c;
    }
    .access {
      margin-left: 120px;
    }
  }
}
</style>