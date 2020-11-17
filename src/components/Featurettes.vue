<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="digytle">
      <div class="row">
        <div class="logo">
          <img :src="`/assets/${data.image}`" />
        </div>
        <div class="info">
          <h1>{{ data.title }}</h1>
          <p>{{ data.description }}</p>
        </div>
      </div>
      <div v-for="element in sections" :key="element">
        <div v-if="element.separator" class="row separator">
          <hr class="line" />
          <p class="separator-text">{{ element.separator.toUpperCase() }}</p>
        </div>
        <div v-if="element.type == 'introduction'">
          <div class="information">
            <h2>{{ element.title }}</h2>
            <div
              v-for="paragraph in element.description"
              :key="paragraph.description"
            >
              <p>{{ paragraph }}</p>
            </div>
          </div>
          <div v-if="element.quote">
            <div class="quote col-7">
              <img src="/assets/big_quotes.svg" />
              <h2>
                {{ element.quote }}
                <img class="small" src="/assets/small_quotes.svg" />
              </h2>
            </div>
          </div>
        </div>
        <div v-if="element.type == 'main'">
          <div class="sectionTitle">
            <h2>{{ element.title }}</h2>
            <p>{{ element.description }}</p>
          </div>
          <div
            class="row section"
            v-for="(subsection, index) in element.subsections"
            :key="index"
            :class="{ 'row-reverse': index % 2 == 0 }"
          >
            <img class="image" :src="`/assets/${subsection.image}`" />
            <div>
              <h3>{{ subsection.title }}</h3>
              <p>{{ subsection.description }}</p>
              <h4>{{ subsection.subtitle }}</h4>
              <p>{{ subsection.subdescription }}</p>
              <div v-if="subsection.tools" class="tools">
                <h4>{{ subsection.toolstitle }}</h4>
                <div class="row">
                  <div v-for="image in subsection.tools" :key="image">
                    <img :src="`/assets/${image}`" />
                  </div>
                </div>
              </div>
              <a :href="subsection.buttonlink" target="_blank">
                <button v-if="subsection.button">
                  <div class="row">
                    <p>{{ subsection.button }}</p>
                    <img src="/assets/button_arrow.svg" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div v-if="element.type == 'people'" class="design">
          <h1>{{ element.title }}</h1>
          <div class="row design-faces">
            <div
              class="row faces"
              v-for="person in element.people"
              :key="person.image"
            >
              <img :src="`/assets/${person.image}`" />
              <div>
                <h3>{{ person.name }}</h3>
                <h4>{{ person.role }}</h4>
                <p>{{ person.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="element.type === 'do'">
          <div
            class="work-with-us"
            :style="{
              'background-image': `url('/assets/${element.background}')`,
            }"
          >
            <div class="work">
              <h2>{{ element.title }}</h2>
              <p class="text">
                {{ element.description }}
              </p>
              <router-link :to="element.link">
                <button v-if="element.button">
                  <p>{{ element.button }}</p>
                </button></router-link
              >
            </div>
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
      margin-bottom: 100px;
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
        width: 340px;
      }
      p {
        margin-top: 50px;
        width: 515px;
        font-weight: 400;
      }
    }
    .information {
      margin-top: 60px;
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
    .sectionTitle {
      text-align: center;
    }
    .section {
      margin: 105px auto 200px;
      max-width: 1366px;
      p {
        max-width: 500px;
      }
      .image {
        width: 600px;
        margin-right: 120px;
      }
      .tools {
        .row {
          margin-left: 0;
          img {
            margin-left: 0;
            margin-right: 10px;
            width: 30px;
            height: 30px;
          }
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
        margin-top: 60px;
        margin-bottom: 105px;
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
@media only screen and (max-width: 1367px) {
  .separator {
    .separator-text {
      margin-left: 140px !important;
    }
  }
}
</style>