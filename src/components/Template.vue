<template>
  <div class="fea">
    <Navigation></Navigation>
    <div class="container">
      <div class="row head">
        <div class="col-lg-5 image">
          <img class="img-fluid" :src="header.image" />
        </div>
        <div class="col-lg-5 header">
          <h1 :style="{ color: header.title.colour }">{{ header.title.title }}</h1>
          <hr :style="{ color: header.title.colour }">
          <p>{{ header.title.description }}</p>
        </div>
      </div>

      <div class="sub-info" v-for="(section, index) in sections"
        :key="index">
        <h2 v-if="section.title" :style="{ color: section.title.colour }">{{ section.title.title }}</h2>
        <div v-if="section.text">
          <p v-for="(text, index) in section.text" :key="index">
            {{ text }}
          </p>
        </div>

        <div class="images" v-if="section.image">
          <img class="img-fluid" :src="section.image.url" />
          <div class="image-title">
            <h3>{{ section.image.title }}</h3>
            <span>{{ section.image.description }}</span>
            <hr :style="{ color: section.image.colour }">
          </div>
        </div>
        
        <div class="col-7 quote" v-if="section.quote">
          <img :src="section.quote.bigQuotes" :style="{ fill: section.quote.colour}"/>
          <h2>{{ section.quote.text }}</h2>
          <img class="small" :src="section.quote.smallQuotes" :style="{ fill: section.quote.colour }" />
        </div>
      </div>

    </div>
    <div
      class="work-with-us"
      :style="{ 'background-image': `url('${action.text.background}')` }"
      v-if="action.text.question"
    >
      <div class="work">
        <hr class="one">
        <h2>{{ action.text.question }}</h2>
        <p class="text">
          {{ action.text.description }}
        </p>
        <div class="buttons">
          <div class="cta" >
            <a :href="button.link" v-for="(button, index) in action.buttons" :key="index"><img :src="button.image" class="button"></a>
          </div>
        </div>
        <hr class="two">
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
  margin-top: 5rem;
  margin-left: 4.2rem;
}
.header {
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
    font-size: 16px;
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
  margin-top: 2rem;
  margin-bottom: 55px;
  text-align: left;
  max-width: 618px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    font-family:  $font__title;
  }
  p {
    color: #2B2D42;
    text-align: left;
    max-width: 618px;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 16px;
    font-family:  $font__menu;
  }
}
.quote {
  max-width: 618px;
  margin-top: 3rem;
  h2 {
    color: #2B2D42;
    text-align: left;
    font-size: 16px;
    line-height: 30px;
    margin-top: 20px;
    font-family:  $font__menu;
    font-weight: 400;
  }
}
.first {
  margin-bottom: 2rem;
  p {
    text-align: left;
    color: #2B2D42;
    max-width: 618px;
    font-size: 16px;
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
  margin-top: 3rem;
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
  padding-top: 1rem;
  padding-bottom: 5rem;
  background-position: top;
  h2 {
    color: #2B2D42;
    width: 50%;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3.3rem;
    background-color: white;
    max-width: 500px;
    font-size: 30px;
  }
  p{
    font-family: $font__menu;
    margin-top: -1.5rem;
  }
  .one, .two{
    border-top: 2px solid #2B2D42;
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;
  }
  .buttons{
    display: flex;
    background-color: white;
    .cta{
      margin: auto;
      .button{
        width: 15rem;
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