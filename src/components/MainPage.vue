<template>
  <div class="main-page">
    <Navigation></Navigation>
    <Header></Header>
    <WeAre></WeAre>
    <WhatWeDo></WhatWeDo>
    <LatestWork></LatestWork>
    <Testimonials></Testimonials>
    <Features></Features>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Header from "./Header";
import WeAre from "./WeAre";
import WhatWeDo from "./WhatWeDo";
import LatestWork from "./LatestWork";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Footer from "./Footer";
// import VueScrollTo from "vue-scrollto";
export default {
  name: "Home",
  components: {
    Navigation,
    Header,
    WeAre,
    WhatWeDo,
    LatestWork,
    Testimonials,
    Features,
    Footer,
  },
  // mounted() {
  //   if (this.$route.hash) {
  //     let cancelScroll = VueScrollTo.scrollTo(this.$route.hash);
  //     let cancelScroll = this.$scrollTo(this.$route.hash);
  //     cancelScroll();
  //   }
  // }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.main-page {
  overflow-x: hidden;
  max-width: 100%;
  margin: auto;
}
</style>