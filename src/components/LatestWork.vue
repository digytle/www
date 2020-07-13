<template>
  <div class="container">
    <div class="row">
      <div class="col-12 row">
        <h1>{{headerText}}</h1>
        <p>{{headerDescription}}</p>
      </div>
      <div class="col-12 row">
        <img src="../../public/assets/blits.png" />
        <img src="../../public/assets/Asset 8-100.png" />
        <div class="image-box">
          <p>{{title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LatestWork from "js-yaml-loader!../../content/latest-work.yaml";
export default {
  name: "LatestWork",
  data() {
    return {
      headerText: "",
      headerDescription: "",
      title: ""
    };
  },
  mounted() {
    this.headerText = LatestWork["header-text"];
    this.headerDescription = LatestWork["header-description"];
    this.title = LatestWork.title;
  }
};
</script>

<style lang="scss" scoped>
.image-box {
  width: 350px;
  height: 350px;
  background-color: #650fba;
  color: white;
}
</style>