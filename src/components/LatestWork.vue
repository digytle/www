<template>
  <div class="container" id="latest-work">
    <div class="row">
      <div class="col-12 row header-text">
        <h1>{{headerText}}</h1>
      </div>
      <div class="col-12 row header-text">
        <p>{{headerDescription}}</p>
      </div>
      <div class="col-12 row section">
        <img :src="firstImage" />
        <img :src="secondImage" />
        <div class="image-box">
          <p>{{title}}</p>
          <button>
            <b-icon class="arrow-icon" icon="arrow-right"></b-icon>
          </button>
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
      title: "",
      firstImage: {},
      secondImage: {}
    };
  },
  mounted() {
    this.headerText = LatestWork["header-text"];
    this.headerDescription = LatestWork["header-description"];
    this.title = LatestWork.title;
    this.firstImage = LatestWork.firstImage;
    this.secondImage = LatestWork.secondImage;
  }
};
</script>

<style lang="scss" scoped>
.header-text {
  justify-content: center;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #333333;
    margin-bottom: 40px;
  }
  p {
    width: 860px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7a7a7a;
    margin-bottom: 80px;
  }
}
.section {
  justify-content: space-between;
  margin-bottom: 170px;
  .image-box {
    width: 350px;
    height: 350px;
    background-color: #650fba;
    color: white;
    p {
      margin-top: 100px;
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 40px;
    }
    button {
      border-radius: 100%;
      padding: 20px 23px;
      border: none;
      background-color: white;
      .arrow-icon {
        color: #c971f3;
      }
    }
  }
}
</style>