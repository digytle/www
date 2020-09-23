<template>
  <div>
    <Navigation></Navigation>
    <div class="row">
      <div class="image">
        <img :src="data.image" />
      </div>
      <div class="info">
        <h1>{{data.title}}</h1>
        <p>{{data.description}}</p>
      </div>
    </div>
    <div class="information">
      <h2>{{data.subTitle}}</h2>
      <p>{{data.subDescription}}</p>
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
.image {
  margin-left: 15px;
}
.info {
  margin-top: 130px;
  margin-left: 170px;
  text-align: left;
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
  margin-bottom: 55px;
  h2 {
    color: #d90429;
  }
  p {
    color: #8d99ae;
    text-align: left;
    width: 950px;
    margin: 0 auto;
  }
}
.quote {
  margin: 120px auto 135px;
  position: relative;
  h2 {
    text-align: left;
    width: 845px;
    font-size: 17px;
    line-height: 30px;
  }
}
.buy-book {
  background-color: #edf2f4;
  padding-top: 120px;
  .book {
    p {
      color: #8d99ae;
      text-align: left;
      width: 687px;
      margin: 30px auto 35px;
    }
  }
  button {
    background-color: #ef233c;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    border-color: transparent;
    outline: none;
    margin-bottom: 0;
    p {
      color: #ffffff;
      margin: 0;
    }
  }
}
.container {
  .row {
    margin-bottom: 130px;
    align-items: center;
  }
  .first {
    p {
      text-align: left;
      max-width: 625px;
      color: #8d99ae;
    }
    h1 {
      text-align: left;
    }
  }
  .second {
    img {
      width: 300px;
      height: 425px;
      margin-right: 180px;
    }
    p {
      text-align: left;
      max-width: 625px;
      color: #8d99ae;
    }
    h2 {
      text-align: left;
    }
  }
}
</style>