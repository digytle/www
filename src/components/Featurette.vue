<template>
  <div>
    <Navigation></Navigation>
    <div class="row">
      <div class="col-lg-5 image">
        <img class="img-fluid" :src="data.image" />
        <img class="tape" src="/assets/duck.tape.png" />
      </div>
      <div class="col-lg-5 info">
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
            <p v-for="paragraph in section.description" :key="paragraph">
              {{ paragraph }}
            </p>
            <div v-if="section.question" class="buy-book row">
              <div>
                <h3>{{ section.question }}</h3>
                <router-link :to="section.link">
                  <h4>{{ section.text }}</h4>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row images-at-bot"
        v-for="(section, index) in data.sections"
        :key="index"
        :class="{
          first: index == 0,
          second: index == 1,
        }"
      >
        <div class="row">
          <div class="col-lg-4">
            <img class="fluid" v-if="section.image" :src="section.image" />
          </div>
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
  margin-top: 10rem;
  .tape {
    position: absolute;
    margin-top: -1.3rem;
    margin-left: -25rem;
  }
}
.info {
  margin-top: 130px;
  margin-left: 115px;
  text-align: left;
  h1 {
    color: #ef233c;
    text-align: center;
    margin-top: 10rem;
  }
  p {
    margin-top: 50px;
    max-width: 590px;
    color: #8d99ae;
    font-weight: 400;
  }
}
.information {
  margin-top: 175px;
  margin-bottom: 55px;
  h2 {
    color: #ef233c;
  }
  p {
    color: #8d99ae;
    text-align: left;
    max-width: 1250px;
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
  margin-bottom: -10rem;
  .row {
    margin: 0 auto 130px;
  }
  .first {
    img {
      margin-left: 85px;
    }
    p {
      text-align: left;
      color: #8d99ae;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    h1 {
      text-align: left;
    }
  }
  .second {
    margin-top: -7rem;
    img {
      width: 300px;
      height: 425px;
      margin-right: 170px;
    }
    .book {
      p {
        text-align: left;
        color: #8d99ae;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      h2 {
        text-align: center;
        margin-bottom: 30px;
        margin-top: 30px;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .buy-book {
        margin-right: 0;
        padding-left: 2rem;
        padding-right: 2rem;
        h3 {
          margin-top: 50px;
          color: #8d99ae;
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
        img {
          margin-left: 2rem;
          padding-right: 2rem;
        }
      }
    }
  }
}
.images-at-bot {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}
@media only screen and (max-width: 1000px) {
  .info {
    margin-left: 0px;
    margin-top: 20px;
    padding-left: 2rem;
    padding-right: 2rem;
    h1 {
      margin-top: 0rem;
    }
  }
  .information {
    margin-top: 20px;
    padding-left: 2rem;
    padding-right: 2rem;
    p {
      color: #8d99ae;
      text-align: left;
      max-width: 950px;
      margin: 0 auto;
    }
  }
}
</style>