<template>
  <div class="des">
    <Navigation></Navigation>
    <div class="container">
      <div class="digytle">
        <div class="row">
          <img class="img-fluid logo" :src="data.image" />
          <div class="row-lg-6 row-md-6 info">
            <h1>{{ data.title }}</h1>
            <p>{{ data.description }}</p>
          </div>
        </div>
        <div class="row-lg-12 information">
          <h2>{{ data.infoTitle }}</h2>
          <p>{{ data.infoDescription }}</p>
        </div>
        <p>
          <a
            class="drop-down"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {{ data.dropDownButton }}
          </a>
        </p>
        <hr />
        <hr class="second" />
        <div class="col-lg-12 collapse drop-items" id="collapseExample">
          <div class="card card-body">
            <div
              class="col-sm-12 col-lg-12 section"
              v-for="(section, index) in sections"
              :key="index"
              :class="{ 'row-reverse': index % 2 == 0 }"
            >
              <img class="img-fluid image" :src="section.image" />
              <div>
                <h3>{{ section.title }}</h3>
                <p>{{ section.description }}</p>
                <h4>{{ section.subTitle }}</h4>
                <p>{{ section.subDescription }}</p>
                <div class="tools">
                  <h4>{{ section.tools }}</h4>
                  <img :src="section.xdImage" />
                  <img :src="section.aiImage" />
                </div>
                <button>
                  <div class="row">
                    <p>{{ section.button }}</p>
                    <img :src="section.buttonImage" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="design">
        <h1>{{ data.designTitle }}</h1>
        <div class="row design-faces">
          <div class="row faces" v-for="face in faces" :key="face.image">
            <img :src="face.image" />
            <div>
              <h3>{{ face.name }}</h3>
              <h4>{{ face.position }}</h4>
              <p>{{ face.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="work-with-us"
        :style="{ 'background-image': `url('${background}')` }"
      >
        <div class="work" v-for="section in data.work" :key="section.question">
          <h2>{{ section.question }}</h2>
          <p class="text">
            {{ section.text }}
          </p>
          <router-link :to="section.link">
            <button v-if="section.button">
              <p>{{ section.button }}</p>
            </button></router-link
          >
        </div>
      </div> -->
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
      sections: [],
      faces: [],
      background: {},
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/design/${this.$route.params.pathMatch}.yaml`);
    this.logoBlack = navigation.logoBlack;
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
    this.sections = this.data.sections;
    this.faces = this.data.faces;
    this.background = this.data.background;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.des {
  overflow: hidden;
}
.digytle {
  .row {
    margin-right: 0;
    .logo {
      margin-top: 5rem;
      widows: 80%;
    }
  }
  text-align: left;
  h4 {
    max-width: 480px;
    color: #ef233c;
  }
  h3 {
    width: 480px;
  }
  p {
    color: #8d99ae;
  }
  .info {
    margin-top: 130px;
    margin-left: 115px;
    h1 {
      color: #ef233c;
      margin-top: 10rem;
      z-index: 1;
    }
    p {
      margin-top: 50px;
      width: 590px;
      font-weight: 400;
    }
  }
  .information {
    margin-top: 5rem;
    margin-bottom: 175px;
    h2 {
      color: #ef233c;
      text-align: center;
    }
    p {
      max-width: 950px;
      margin: 0 auto;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  .row {
    margin-top: 0;
    &.row-reverse {
      flex-direction: row-reverse;
      margin-right: 20px;
      img {
        margin-left: 120px;
        margin-right: 0px;
      }
      button {
        background-color: #ef233c;
      }
    }
  }
  .drop-down {
    margin-top: -5rem;
    display: flex;
    color: black;
    text-decoration: none;
    font-size: 29px;
  }
  hr {
    border-bottom: 2px solid #ef233c;
    border-top: none;
  }
  .second {
    border-bottom: 6px solid #ef233c;
    width: 18rem;
    margin-top: -1.1rem;
    margin-left: 0rem;
  }
  .card-body {
    border: none;
  }
  .section {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 0px;
    display: flex;
    p {
      max-width: 500px;
    }
    .tools {
      img {
        padding-right: 0.5rem;
      }
    }
    button {
      background-color: #2b2d42;
      width: 160px;
      height: 45px;
      margin-top: 30px;
      padding-left: 15px;
      .row {
        margin: 0 auto;
        p {
          color: #ffffff;
        }
        img {
          width: 20px;
          height: 13px;
          margin-left: 10px;
          margin-top: 10px;
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .info {
      margin-top: 130px;
      margin-left: 115px;
      h1 {
        color: #ef233c;
        margin-top: -3rem;
        z-index: 1;
      }
      p {
        margin-top: 50px;
        width: 590px;
        font-weight: 400;
      }
    }
    .section {
      display: block;
      h3 {
        width: 70%;
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .info {
      h1 {
        color: #ef233c;
        margin-top: -5rem;
        z-index: 1;
      }
    }
  }
}
</style>