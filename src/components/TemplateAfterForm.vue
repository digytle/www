<template>
<div class="fea">
  <div class="container">
    <div class="privacy-policy">
      <Navigation></Navigation>
      <div class="thank-you">
        <img
          src="/assets/thank-you.jpg"
        />
        <div>
          <h3>Your form was submitted successfully and we will be in contact shortly</h3>
          <hr>
          <div class="explore">
            <div class="col social">
              <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
              <a href="https://twitter.com/digytle"><i class="fab fa-twitter-square"></i></a>
              <a href="https://www.linkedin.com/company/digytle/about/"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/digytle/www"><i class="fab fa-github" ></i></a>
            </div>
            <router-link to="/" class="btn">
              <button class="btn btn-primary">Or explore our main page</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="title">
          <h3>Jump to next featurette:</h3>
          <hr>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-12 info-cards"
            v-for="feature in features"
            :key="feature.name"
          >
            <router-link :to="`${feature.template}/${feature.link}`">
              <div class="card">
                <img class="card-img-top" :src="feature.image" />
                <div class="card-body">
                  <h3>{{ feature.name }}</h3>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Navigation from "./Navigation";
import navigation from "js-yaml-loader!../../content/navigation.yaml";
import Features from "js-yaml-loader!../../content/featurettes.yaml";
import Footer from "./Footer";
export default {
  name: "TemplateAfterForm",
  components: { Navigation, Footer },
  data() {
    return {
      data: {},
      headerText: "",
      headerDescription: "",
      features: [],
    };
  },
  mounted() {
    this.logoText = navigation["logo-text"];
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
    this.headerText = Features["header-text"];
    this.headerDescription = Features["header-description"];
    this.features = Features.features;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  .thank-you{
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    img{
      width: 40%;
      height: auto;
      margin-left: 1rem;
    }
    h3{
      margin-left: 2rem;
      margin-top: 8rem;
      margin-bottom: 3rem;
      text-align: left;
      max-width: 600px;
      color:  #007bff;
      font-size: 34px;
    }
    hr{
      margin-left: auto;
      margin-right: auto;
      width: 200px;
      border-top: 3px solid #007bff;
    }
  }
  .title {
    margin-bottom: 1rem;
    width: fit-content;
    hr {
      border-bottom: 4px solid #2b2d42;
      border-top: none;
      margin-left: 0px;
    }
    h3 {
      color: #2b2d42;
      text-align: left;
      margin-top: -1rem;
      font-size: 29px;
    }
  }
  .info-cards {
    text-align: left;
    a:hover {
      text-decoration: none;
    }
    .card {
      border: none;
    }
    .card-body{
      margin-top: -3.5rem;
      h3 {
        color: #333333;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        background-color: white;
      }
      p {
        margin-top: 0rem;
        color: #51586D;
        font-size: 16px;
        line-height: 25px;
        font-family:  $font__menu;
      }
    }
    img {
      width: 100%;
    }
  }
    .explore{
      margin-top: 2rem;
      margin-left: 0;
      .social{
      font-size: 35px;
      padding: 0;
      .fab{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        color: #007bff;
      }
      .btn{
        margin-top: 10rem;
      }
    }
  }
</style>