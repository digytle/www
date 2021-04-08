<template>
<div class="container">
  <div class="column navigation">
    <div class="logo">
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
          <ul class="navbar-nav">
            <router-link class="li" to="/" v-scroll-to="'#navigation'">{{
              firstComponent
            }}</router-link>
            <router-link class="li" to="/#what-we-do" v-scroll-to="'#what-we-do'">{{
              secondComponent
            }}</router-link>
            <router-link
              class="li"
              to="/#latest-work"
              v-scroll-to="'#latest-work'"
              >{{ thirdComponent }}</router-link
            >
            <router-link
              class="li"
              to="/#YearSummarised"
              v-scroll-to="'#YearSummarised'"
              >{{ fourthComponent }}</router-link
            >
            <router-link
              class="li"
              to="/#features"
              v-scroll-to="'#features'"
              >{{ fifthComponent }}</router-link
            >
          </ul>
      </div>
    </nav>
  </div>
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
    width: fit-content;
    margin-top: 1rem;
    margin-left: 0px;
    img{
      width: 330px;
    }
  }
  a {
    text-decoration: none;
    color: #8d99ae;
    font-size: 17px;
    border: none;
    padding-right: 1.5rem;
    font-weight: 300;
    margin-top: 1rem;
  }
  .buttons {
    margin-top: 12rem;
    margin-left: -44rem;
    .router-link-exact-active {
      color: #2b2d42;
    }
  }
  .mainnav {
    padding: 0rem;
    .navlist{
      ul{
        white-space: nowrap;
        white-space: pre;
      }
    }
  }
  .navbarsmall {
    border: none;
    margin-top: -13rem;
  }
}

@media only screen and (max-width: 765px) {
  .navlist {
    z-index: 1;
    width: 100vw;
    height: 15rem;
    margin-top: -4rem;
    background-color: white;
  }
  .navigation {
    margin-left: 0rem;
    .mainnav {
      width: 100vw;
      margin-top: 4rem;
      margin-left: 0rem;
      margin-right: 5rem;
    }
    .logo{
      img{
        width: 70%;
        margin-left: 11%;
      }
    }
  }
}
</style>