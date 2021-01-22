<template>
  <div class="row navigation">
    <div class="col-md-6 logo">
      <router-link to="/">
        <img
          :src="
            this.$route.path.startsWith('/person') ||
            this.$route.path.startsWith('/feature')
              ? logoWhite
              : logoBlack
          "
          class="img-fluid logo"
        />
      </router-link>
    </div>
    <nav class="navbar navbar-expand-md navbar-light mainnav">
      <div class="container-fluid asd">
        <button
          class="navbar-toggler navbarsmall"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navlist" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <router-link class="li" to="/" v-scroll-to="'#navigation'">{{
              firstComponent
            }}</router-link>
            <router-link class="li" to="#what-we-do" v-scroll-to="'#what-we-do'">{{
              secondComponent
            }}</router-link>
            <router-link
              class="li"
              to="#latest-work"
              v-scroll-to="'#latest-work'"
              >{{ thirdComponent }}</router-link
            >
            <router-link
              class="li"
              to="#YearSummarised"
              v-scroll-to="'#YearSummarised'"
              >{{ fourthComponent }}</router-link
            >
            <router-link
              class="li"
              to="#features"
              v-scroll-to="'#features'"
              >{{ fifthComponent }}</router-link
            >
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import navigation from "js-yaml-loader!../../content/navigation.yaml";
export default {
  name: "Navigation",
  data() {
    return {
      logoBlack: {},
      logoWhite: {},
      firstComponent: "",
      secondComponent: "",
      thirdComponent: "",
      fourthComponent: "",
      fifthComponent: "",
    };
  },
  mounted() {
    let scrollto = this.$router.history.current.hash;
    document.getElementById(scrollto.replace('#', ''))?.scrollIntoView();
    this.logoBlack = navigation.logoBlack;
    this.logoWhite = navigation.logoWhite;
    this.firstComponent = navigation.firstComponent;
    this.secondComponent = navigation.secondComponent;
    this.thirdComponent = navigation.thirdComponent;
    this.fourthComponent = navigation.fourthComponent;
    this.fifthComponent = navigation.fifthComponent;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.navigation {
  height: 60px;
  background-color: white;
  color: #464646;
  margin-bottom: 100px;
  width: 100%;
  font-family: $font__menu;
  .logo {
    display: flex;
    padding-left: 35px;
    width: 330px;
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    padding-right: -1rem;
    color: #8d99ae;
    font-size: 17px;
    border: none;
    margin: 0 10px;
    font-weight: 300;
  }
  .buttons {
    margin-top: 12rem;
    margin-left: -44rem;
    .router-link-exact-active {
      color: #2b2d42;
    }
  }
  .mainnav {
    position: absolute;
    margin-top: 9.5rem;
    margin-left: 2.5rem;
  }
  .navbarsmall {
    border: none;
    margin-top: -13rem;
  }
}
@media only screen and (min-width: 1700px) {
  .navigation{
    margin-left: 10rem;
    width: 80%;
  }
}
@media only screen and (max-width: 768px) {
  .navlist {
    z-index: 1;
    width: 100vw;
    background-color: white;
    margin-top: -2.5rem;
    margin-left: -2rem;
  }
  .logo {
    margin-left: -1.5rem;
  }
  .navigation {
    margin-left: 0rem;
    .mainnav {
      position: absolute;
      margin-top: 10rem;
      margin-left: -5rem;
    }
  }
}
@media only screen and (max-width: 767px) {
  .navlist {
    z-index: 1;
    width: 100vw;
    background-color: white;
    margin-top: -2.5rem;
    margin-left: -2rem;
  }
  .logo {
    margin-left: 0rem;
  }
  .navigation {
    margin-left: 0rem;
    .mainnav {
      position: absolute;
      margin-top: 10rem;
      margin-left: 0rem;
    }
  }
}
@media only screen and (max-width: 500px) {
    .logo{
    margin-left: -0.2rem;
  }
  .navigation {
    margin-left: 0rem;
    .mainnav {
      position: absolute;
      margin-top: 10rem;
      margin-left: 0rem;
    }
  }
}
</style>