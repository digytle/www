<template>
  <div class="fea">
    <Navigation></Navigation>
    <div class="container">
      <div class="row head">
        <div class="col-lg-5 image">
          <img class="img-fluid" :src="data.image" />
        </div>
        <div class="col-lg-5 header">
          <h1>{{ data.title }}</h1>
          <hr>
          <p>{{ data.description }}</p>
        </div>
      </div>
      <div class="sub-info">
        <h2>{{ data.subTitle }}</h2>
        <p>{{ data.subDescription }}</p>
      </div>
      <div
        class="images"
        v-for="(section, index) in data.sections"
        :key="index"
        :class="{
          first: index == 0,
          second: index == 1,
        }"
      >
        <img class="img-fluid" v-if="section.image" :src="section.image" />
        <div class="image-title">
          <h3>{{ section.imageTitle }}</h3>
          <span>{{ section.imageDescription }}</span>
          <hr>
        </div>
      </div>
      <div class="col-7 quote">
        <div class="row" v-for="paragraph in data.quote" :key="paragraph.text">
          <img :src="paragraph.bigQuotes" />
          <h2>{{ paragraph.text }}</h2>
          <img class="small" :src="paragraph.smallQuotes" />
        </div>
      </div>
      <div class="row">
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
        class="images-left"
        v-for="(section, index) in data.sections"
        :key="index"
        :class="{
          first: index == 0,
          second: index == 1,
        }"
      >
        <div class="image-title">
          <h3>{{ section.imageTitle2 }}</h3>
          <span>{{ section.imageDescription2 }}</span>
          <hr>
        </div>
        <img class="img-fluid" v-if="section.image2" :src="section.image2" />
      </div>
      <div
        class="images-right"
        v-for="(section, index) in data.sections"
        :key="index"
        :class="{
          first: index == 0,
          second: index == 1,
        }"
      >
        <img class="img-fluid" v-if="section.image3" :src="section.image2" />
        <div class="image-title">
          <h3>{{ section.imageTitle3 }}</h3>
          <span>{{ section.imageDescription3 }}</span>
          <hr>
        </div>
      </div>
    </div>
    <div
      class="work-with-us"
      :style="{ 'background-image': `url('${background}')` }"
    >
      <div class="work" v-for="section in data.action" :key="section.question">
        <h2>{{ section.question }}</h2>
        <p class="text">
          {{ section.description }}
        </p>
        <div class="cta">
          <h2>{{ section.cta }}:</h2>
          <a href="section.url"><img :src="section.image" class="button"></a>
          <a href="section.url"><img :src="section.image2" class="button"></a>
          <a href="section.url"><img :src="section.image3" class="button"></a>
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
      action: "",
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
    this.action = navigation.action;
    this.contacts = navigation.contacts;
    this.sections = this.data.sections;
    this.faces = this.data.faces;
    this.background = this.data.background;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.fea{
  overflow: hidden;
}
.image {
  margin-top: 10rem;
  margin-left: auto;
}
.header {
  margin-top: 10%;
  margin-right: auto;
  text-align: left;
  h1 {
    color: #ef233c;
    margin-top: 11rem;
  }
  p {
    margin-top: 0px;
    max-width: 500px;
    color: #2B2D42;
    font-size: 15px;
    font-family:  $font__menu;
  }
  hr{
    border-top: 3px solid red;
    width: 40%;
    margin-left: 0px;
    margin-top: 3rem;
  }
}
.sub-info {
  margin-top: 4rem;
  margin-bottom: 55px;
  h2 {
    color: #ef233c;
  }
  p {
    color: #2B2D42;
    text-align: left;
    max-width: 618px;
    margin: 0 auto;
    font-size: 18px;
  }
}
.quote {
  margin: 20px auto 20px;
  position: relative;
  max-width: 618px;
  margin-top: 3rem;
  h2 {
    text-align: left;
    font-size: 17px;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.row {
  margin: 0 auto 0px;
}
.first {
  margin-bottom: 2rem;
  p {
    text-align: left;
    color: #2B2D42;
    max-width: 618px;
    font-size: 18px;
  }
  h1 {
    text-align: left;
  }
}

.images{
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: fit-content;
  .image-title{
    max-width: 205px;
    height: fit-content;
    padding: 20px;
    margin-top: 20%;
    text-align: left;
    h3{
      font-size: 16px;
    }
    span{
      font-size: 12px;
    }
    hr{
      border-top: #ef233c solid 3px;
    }
  }
}
.images-left{
  margin-left: 150px;
  margin-right: auto;
  display: flex;
  width: fit-content;
  img{
    width: 618px;
    margin-left: 0px;
  }
  .image-title{
    max-width: 205px;
    padding: 20px;
    margin-right: 20px;
    margin-top: 10%;
    text-align: left;
    h3{
      font-size: 16px;
    }
    span{
      font-size: 12px;
    }
    hr{
      border-top: #ef233c solid 3px;
    }
  }
}
.images-right{
  margin-left: auto;
  margin-right: 150px;
  display: flex;
  width: fit-content;
  img{
    width: 618px;
  }
  .image-title{
    max-width: 205px;
    padding: 20px;
    margin-top: 10%;
    margin-left: 20px;
    text-align: left;
    h3{
      font-size: 16px;
    }
    span{
      font-size: 12px;
    }
    hr{
      border-top: #ef233c solid 3px;
    }
  }
}
.work-with-us{
  padding-top: 3rem;
  padding-bottom: 140px;
  background-position: top;
  h2, p {
    color: white;
    width: 50%;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  p{
    font-family: $font__menu;
  }
  .cta{
    background-color: white;
    h2{
      color: black;
    }
  }
  .button{
    width: 17%;
    margin-left: 2rem;
  }
}

@media only screen and (max-width: 1100px) {
  .header {
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  h1 {
    margin-top: 0rem;
  }
  p {
    margin-left: auto;
    margin-right: auto;
  }
  hr{
    margin-left: auto;
    margin-right: auto;
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
  .images-right, .images{
  margin-left: auto;
  margin-right: auto;
  display: block;
    .image-title{
      padding:0px;
      margin-right: auto;
      margin-left: auto;
      margin-top: 5%;
      text-align: left;
      h3{
        font-size: 16px;
      }
      span{
        font-size: 12px;
      }
      hr{
        border-top: #ef233c solid 3px;
      }
    }
  }
  .images-left{
  margin-left: auto;
  margin-right: auto;
  display: flex;
  -webkit-flex-flow: column-reverse;
  flex-flow: column-reverse;
    .image-title{
      padding:0px;
      margin-right: auto;
      margin-left: auto;
      margin-top: 5%;
      text-align: left;
      h3{
        font-size: 16px;
      }
      span{
        font-size: 12px;
      }
      hr{
        border-top: #ef233c solid 3px;
      }
    }
  }
}
@media only screen and (max-width: 800px) {
  .work-with-us{
    .button{
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
    }
  }
}
@media only screen and (max-width: 500px) {
  .image {
  margin-top: 5rem;
}
.info {
    margin-left: 0px;
    margin-top: 20px;
    h1 {
      margin-top: 0rem;
    }
  }
}
</style>