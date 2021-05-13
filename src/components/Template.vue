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
           <hr class="second-line" :style="{ color: header.title.colour }">
           <span>Share this story:</span>
          <script type="application/javascript" defer src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-606cd3781f8387e0"></script>
          <div class="addthis_inline_share_toolbox_nj2o"></div>
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
          <i class="fas fa-quote-left" :style="{ color: section.quote.colour }"></i>
          <h2>{{ section.quote.text }}</h2>
          <i class="fas fa-quote-right" :style="{ color: section.quote.colour }"></i>
          <h3>{{ section.quote.author }}</h3>
        </div>

        <div class="images-wide" v-if="section.imageWide">
          <img class="img-fluid" :src="section.imageWide.url" />
          <div class="image-title">
            <h3>{{ section.imageWide.title }}</h3>
            <span>{{ section.imageWide.description }}</span>
            <hr :style="{ color: section.imageWide.colour }">
          </div>
        </div>

        <div class="images-wide" v-if="section.video">
          <video width="100%" autoplay loop muteds>
            <source :src="section.video.url" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="image-title">
            <h3>{{ section.video.title }}</h3>
            <span>{{ section.video.description }}</span>
            <hr :style="{ color: section.video.colour }">
          </div>
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
            <a :href="button.link" target="_blank" rel="noopener noreferrer" v-for="(button, index) in action.buttons" :key="index"><img :src="button.image" class="button"></a>
          </div>
        </div>
        <hr class="two">
      </div>
    </div>
    <contactForm></contactForm>
    <div class="row-lg-12 footer">
      <div class="head">
        <img class="logo" :src="logo" />
        <p>We build the future</p>
      </div>
      <div class="col-lg-4 location">
        <p><img :src="locationPoint" />{{ address }}</p>
      </div>
      <div class="col-lg-4 contacts">

        <div class="emails">
          <div v-for="email in contacts" :key="email">
            <a :href="`mailto:${email}`">
              <p><img :src="contactsImage" />{{ email }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 copyright">
        <router-link to="/privacy-policy/"
          ><p>{{ privacy }}</p></router-link
        >
        <p>{{ copyright }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import contactForm from "./contactForm";
import footer from "js-yaml-loader!../../content/footer.yaml";
export default {
  name: "Featurette",
  components: { Navigation, contactForm },
  data() {
    return {
      data: {},
      background: {},
      header: {},
      sections: [],
      text: [],
      action: [],
      buttons: [],
      contact: [],
      options: [],
      logo: "",
      privacy: "",
      social: "",
      copyright: "",
      locationPoint: "",
      address: "",
      contactsImage: {},
      contacts: [],
      twitter: {},
      linkedin: {},
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
    this.contact = this.data.contact;
    this.options = this.data.options;
    this.logo = footer.logo;
    this.privacy = footer.privacy;
    this.address = footer.address;
    this.copyright = footer.copyright;
    this.locationPoint = footer.location;
    this.contactsImage = footer.contactsImage;
    this.contacts = footer.contacts;
    this.twitter = footer.twitter;
    this.linkedin = footer.linkedin;
  },
};
</script>

<style scoped lang="scss">
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
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
    margin-top: 7rem;
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
  .second-line{
    margin-top: 0rem;
  }
  span{
    font-size: 13px;
    margin-left: 0.2rem;
  }
  .addthis_inline_share_toolbox_nj2o{
    margin-top: 5px;
  }
}
.sub-info {
  margin-top: -2rem;
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
    margin-top: 0.7rem;
    line-height: 1.5rem;
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
  h3 {
    text-align: left;
    font-size: 16px;
    margin-top: 1rem;
    font-family:  $font__menu;
    font-weight: 400;
  }
  .fa-quote-left {
    font-size: 40px;
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

.images-wide{
margin-left: 0px;
margin-right: 0px;
display: flex;
flex-direction: row-reverse;
margin-top: 3rem;
width: fit-content;
  .image-title{
    text-align: left;
    margin-right: 10%;
    h3{
      font-size: 16px;
      width: 170px !important;
      margin-top: 70%;
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
  padding-bottom: 4rem;
  background-position: top;
  h2 {
    color: #2B2D42;
    width: 60%;
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
    margin-bottom: 1rem;
    .cta{
      margin: auto;
      .button{
        width: 15rem;
      }
    }
  }
}
.footer{
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  .head{
    margin-bottom: 4rem;
    .logo{
      width: 30%;
      margin-top: 3rem;
    }
    p{
      font-size: 19px;
      font-family: $font__menu;
    }
  }
  .location, .contacts{
    text-align: center;
    margin: auto;
    p{
      font-family: $font__menu;
    }
    a{
      text-decoration: underline;
      color: #2B2D42;
    }
    img{
      margin-right: 10px;
    }
  }
  .contacts{
    text-align: center;
    p{
      font-family: $font__menu;
      font-size: 19px;
    }
  }
  .copyright{
    text-align: center;
    margin: auto;
    margin-top: 7rem;
    p{
      font-family: $font__menu;
    }
    a{
      color: #2B2D42;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .header {
  margin-top: 30px;
  text-align: left;
  max-width: 618px;
  margin-left: auto;
  margin-right: auto;
    h1 {
      margin-top: 0rem;
    }
  }
  .image {
    margin-left: auto;
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
  .images-wide{
    display: block;
    .image-title{
    text-align: left;
    margin: 0px;
      h3{
        font-size: 16px;
        width: 170px !important;
        margin-top: 20px;
      }
      span{
        font-size: 12px;
      }
      hr{
        border-top: solid 3px;
        width: 40%;
        margin-left: 0px;
      }
    }
  }
}


@media only screen and (max-width: 1025px) and (orientation: landscape) {
  .header {
  margin-left: 0px;
  text-align: left;
    h1 {
      font-size: 35px;
      margin-top: 5rem;
    }
    hr{
      margin-left: 0px;
    }
  }

}
@media only screen and (max-width: 800px) {
  .work-with-us{
    .one, .two{
      max-width: 80%;
    }
    .button{
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
    }
  }
}
@media only screen and (max-width: 500px) {
   .header {
    h1 {
      font-size: 40px;
    }
  }
  .image {
    margin-top: 0rem;
  }
  .info {
    margin-left: 0px;
    margin-top: 20px;
    h1 {
      margin-top: 0rem;
    }
  }
  .images{
    display: block;
    .image-title{
      padding: 20px 20px 0px 0px;
      margin-top: 5px;
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
    h2 {
      width: 60%;
    }
    .one, .two{
      max-width: 80%;
    }
  }
}
</style>