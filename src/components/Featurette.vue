<template>
  <div>
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
      <h2>{{ data.subTitle }}</h2>
      <p>{{ data.subDescription }}</p>
    </div>
    <div class="quote col-7">
      <div class="row" v-for="paragraph in data.quote" :key="paragraph.text">
        <img :src="paragraph.bigQuotes" />
        <h2>{{ paragraph.text }}</h2>
        <img class="small" :src="paragraph.smallQuotes" />
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div
          class="row first"
          v-for="section in data.firstSection"
          :key="section.description"
        >
          <p class="col-6">{{ section.description }}</p>
          <img class="col-6" :src="section.image" />
        </div>
        <div
          class="row second"
          v-for="section in data.secondSection"
          :key="section.subTitle"
        >
          <img class="second" :src="section.image" />
          <div class="col-6">
            <h2>{{ data.subTitle }}</h2>
            <p>{{ section.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buy-book">
      <div class="container">
        <div class="book" v-for="book in data.books" :key="book.question">
          <h2>{{ book.question }}</h2>
          <p>{{ book.text }}</p>
        </div>
        <div class="col-3">
          <button v-if="data.button">
            <p>{{ data.button }}</p></button
          ><img
            v-for="book in data.books"
            :key="book.question"
            :src="book.image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
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
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
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
    color: #ef233c;
    text-align: center;
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
  .col-3 {
    margin: 0 auto;
  }
  button {
    background-color: #ef233c;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    border-color: transparent;
    outline: none;
    margin-bottom: 10px;
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