<template>
  <div class="main-page">
    <Navigation></Navigation>
    <Header></Header>
    <contactForm></contactForm>
    <!-- <WeAre></WeAre> -->
    <WhatWeDo></WhatWeDo>
    <DigytleStoryPreview></DigytleStoryPreview>
    <LatestWork></LatestWork>
    <YearSummarised></YearSummarised>
    <Features></Features>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Header from "./Header";
import contactForm from "./contactForm";
// import WeAre from "./WeAre";
import WhatWeDo from "./WhatWeDo";
import DigytleStoryPreview from "./DigytleStoryPreview";
import LatestWork from "./LatestWork";
import YearSummarised from "./YearSummarised";
import Features from "./Features";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Navigation,
    Header,
    contactForm,
    // WeAre,
    WhatWeDo,
    DigytleStoryPreview,
    LatestWork,
    YearSummarised,
    Features,
    Footer
  }
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
// .main-page{
//   overflow: hidden;
// }
</style>