<template>
  <div class="main-page">
    <Navigation></Navigation>
    <Header></Header>
    <WeAre></WeAre>
    <WhatWeDo></WhatWeDo>
    <LatestWork></LatestWork>
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
import Features from "./Features";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Navigation,
    Header,
    WeAre,
    WhatWeDo,
    LatestWork,
    Features,
    Footer
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.main-page {
  font-family: $font__public;
  overflow-x: hidden;
}
</style>