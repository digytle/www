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
          class="row"
          v-for="(section, index) in data.sections"
          :key="index"
          :class="{
            first: index == 0,
            second: index == 1,
          }"
        >
          <div class="book">
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
            <div v-if="section.question" class="buy-book row">
              <div>
                <h3>{{ section.question }}</h3>
                <router-link :to="section.link">
                  <h4>{{ section.text }}</h4>
                </router-link>
              </div>
              <img class="amazon" :src="section.imageAmazon" />
            </div>
          </div>
          <img v-if="section.image" :src="section.image" />
        </div>
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
      logoBlack: {},
      home: "",
      about: "",
      work: "",
      contacts: "",
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
    this.logoBlack = navigation.logoBlack;
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.row {
  margin-right: 0;
}
.image {
  margin-left: 15px;
}
.info {
  margin-top: 130px;
  margin-left: 115px;
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
.container {
  .row {
    margin: 0 auto 130px;
    align-items: center;
  }
  .first {
    img {
      margin-left: 85px;
    }
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
    flex-direction: row-reverse;
    img {
      width: 300px;
      height: 425px;
      margin-right: 170px;
    }
    .book {
      max-width: 625px;

      p {
        text-align: left;
        max-width: 625px;
        height: 307px;
        color: #8d99ae;
      }
      h2 {
        text-align: left;
        margin-bottom: 30px;
        margin-top: 30px;
        max-width: 625px;
      }
      .buy-book {
        margin-right: 0;
        h3 {
          margin-top: 50px;
          text-align: left;
          font-size: 20px;
        }
        h4 {
          text-align: left;
          font-size: 20px;
          color: red;
        }
        .amazon {
          width: 175px;
          height: 85px;
          margin-right: 0;
        }
      }
    }
  }
}
</style>