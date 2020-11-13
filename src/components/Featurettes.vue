<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="digytle">
      <div class="row">
        <div class="logo">
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
      <div v-if="data.quote" class="quote col-7">
        <div class="row" v-for="paragraph in data.quote" :key="paragraph.text">
          <img :src="paragraph.bigQuotes" />
          <h2>
            {{ paragraph.text }}
            <img class="small" :src="paragraph.smallQuotes" />
          </h2>
        </div>
      </div>
      <div v-if="data.discover" class="discover">
        <div class="container">
          <div
            class="row"
            v-for="(discover, index) in data.discover"
            :key="index"
            :class="{
              left: index == 0,
              right: index == 1,
            }"
          >
            <div class="book">
              <h2>{{ discover.title }}</h2>
              <p v-for="paragraph in discover.infoText" :key="paragraph">
                {{ paragraph }}
              </p>
              <div v-if="discover.question" class="buy-book row">
                <div>
                  <h3>{{ discover.question }}</h3>
                  <router-link :to="discover.link">
                    <h4>{{ discover.text }}</h4>
                  </router-link>
                </div>
                <img class="amazon" :src="discover.imageAmazon" />
              </div>
            </div>
            <img v-if="discover.image" :src="discover.image" />
          </div>
        </div>
      </div>
      <div v-if="sections">
        <div
          class="row section"
          v-for="(section, index) in sections"
          :key="index"
          :class="{ 'row-reverse': index % 2 == 0 }"
        >
          <img class="image" :src="section.image" />
          <div>
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
            <h4>{{ section.subTitle }}</h4>
            <p>{{ section.subDescription }}</p>
            <div v-if="section.tools" class="tools">
              <h4>{{ section.tools }}</h4>
              <img :src="section.xdImage" />
              <img :src="section.aiImage" />
            </div>
            <button v-if="section.button">
              <div class="row">
                <p>{{ section.button }}</p>
                <img :src="section.buttonImage" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div v-if="faces" class="design">
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
        v-if="data.work"
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
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
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
.container {
  padding-left: 0;
  padding-right: 0;
  .digytle {
    .row {
      margin-right: 0;
    }
    text-align: left;
    h4 {
      width: 480px;
      color: #ef233c;
    }
    h3 {
      width: 480px;
    }
    .logo {
      margin-left: 15px;
    }
    p {
      color: #8d99ae;
    }
    .info {
      margin-top: 130px;
      margin-left: 115px;
      h1 {
        color: #6e44ff;
        margin-top: 30px;
        z-index: 1;
      }
      p {
        margin-top: 50px;
        width: 515px;
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
    .discover {
      .container {
        .row {
          margin: 0 auto 130px;
          align-items: center;
        }
        .left {
          justify-content: center;
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
        .right {
          flex-direction: row-reverse;
          justify-content: center;
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
                width: unset;
              }
              h4 {
                text-align: left;
                font-size: 20px;
                color: red;
                width: unset;
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
    }
    .row {
      margin-top: 0;
      &.row-reverse {
        flex-direction: row-reverse;
        img {
          margin-left: 120px;
          margin-right: 0px;
        }
        button {
          background-color: #ef233c;
        }
      }
    }
    .section {
      margin: 200px auto 200px;
      max-width: 1366px;
      p {
        max-width: 500px;
      }
      .image {
        width: 600px;
        margin-right: 120px;
      }
      .tools {
        img {
          margin-left: 0;
          margin-right: 10px;
          width: 30px;
          height: 30px;
        }
        h4 {
          color: #51586d;
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
    .design {
      margin-bottom: 270px;
      h1 {
        color: #6e44ff;
        text-align: center;
        margin-top: 300px;
        margin-bottom: 100px;
      }
      .design-faces {
        justify-content: space-evenly;
        .faces {
          align-items: center;
          h3 {
            width: 250px;
          }
          h4 {
            width: 140px;
          }
          p {
            width: 320px;
          }
          img {
            margin-right: 30px;
          }
        }
      }
    }
    .work-with-us {
      // background-image: url("/assets/background_with_us.png");
      // background-color: #2b2d42;
      padding-top: 140px;
      padding-bottom: 140px;
      background-position: top center;
      .work {
        text-align: center;
        .text {
          color: #edf2f4;
          width: 685px;
          margin: 40px auto 30px;
        }
        h2 {
          color: #edf2f4;
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
    }
  }
}
</style>