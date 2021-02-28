<template>
  <div class="fea">
    <Navigation></Navigation>
    <div class="container">
     <div class="row head">
        <div class="col-lg-5 image">
          <img class="img-fluid" :src="header.image" />
        </div>
        <div class="col-lg-5 header" >
          <h1 :style="{ color: header.title.colour }">{{ header.title.title }}</h1>
          <hr :style="{ color: header.title.colour }">
          <p>{{ header.title.description }}</p>
        </div>
      </div>
      <div class="sub-info" v-for="(section, index) in sections"
        :key="index">
        <h2 :style="{ color: section.title.colour }">{{ section.title.title }}</h2>
        <p v-for="(text, index) in section.text" :key="index">
          {{ text }}
        </p>
        <div class="images">
          <img class="img-fluid" v-if="section.image" :src="section.image.url" />
          <div class="image-title">
            <h3>{{ section.image.title }}</h3>
            <span>{{ section.image.description }}</span>
            <hr :style="{ color: section.image.colour }">
          </div>
        </div>
        <div class="col-7 quote">
          <img :src="section.quote.bigQuotes" :style="{ fill: section.quote.colour}"/>
          <h2>{{ section.quote.text }}</h2>
          <img class="small" :src="section.quote.smallQuotes" :style="{ fill: section.quote.colour }" />
        </div>
      </div>
    </div>
    <div
      class="work-with-us"
      :style="{ 'background-image': `url('${action.text.background}')` }"
    >
      <div class="work">
        <h2>{{ action.text.question }}</h2>
        <p class="text">
          {{ action.text.description }}
        </p>
        <div class="buttons">
          <div class="cta" >
            <a :href="button.link" v-for="(button, index) in buttons" :key="index"><img :src="button.image" class="button"></a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import navigation from "js-yaml-loader!../../content/navigation.yaml";
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  name: "Featurette",
  components: { Navigation, Footer },
  data() {
    return {
      data: {},
      background: {},
      header: {},
      sections: [],
      text: [],
      action: [],
      buttons: [],
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
    this.background = this.data.background;
    this.header = this.data.header;
    this.sections = this.data.sections;
    this.text = this.sections.section;
    this.action = this.data.action;
    this.buttons = this.data.buttons;
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
    border-top: 3px solid;
    width: 40%;
    margin-left: 0px;
    margin-top: 3rem;
  }
}
.sub-info {
  margin-top: 4rem;
  margin-bottom: 55px;
  text-align: left;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  h2 {
    font-family:  $font__menu;
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
  max-width: 618px;
  margin-top: 3rem;
  h2 {
    color: #2B2D42;
    text-align: left;
    font-size: 17px;
    line-height: 30px;
    margin-top: 20px;
    font-family:  $font__menu;
    font-weight: 400;
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
  margin-top: 2rem;
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
      border-top: solid 3px;
    }
  }
}

.work-with-us{
  padding-top: 3rem;
  padding-bottom: 140px;
  background-position: top;
  background-color: rgba(109, 109, 109, 0.685);
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
  .buttons{
    display: flex;
    background-color: white;
    .cta{
      margin: auto;
      .button{
        width: 20rem;
      }
    }
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