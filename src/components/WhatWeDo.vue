<template>
  <div class="background">
    <div class="container">
      <div class="col-12 row header-text">
        <h1>{{headerText}}</h1>
      </div>
      <div class="col-12 row header-text">
        <p>{{headerDescription}}</p>
      </div>
      <div class="col-12 row section" v-for="row of explanations" :key="row">
        <div class="col-6">
          <h1>{{row.number}}</h1>
          <h3>{{row.text}}</h3>
          <p>{{row.description}}</p>
          <button>
            <b-icon class="arrow-icon" icon="arrow-right"></b-icon>
          </button>
        </div>
        <div class="col-6">
          <img :src="row.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhatWeDo from "js-yaml-loader!../../content/what-we-do.yaml";
export default {
  name: "WhatWeDo",
  data() {
    return {
      headerText: "",
      headerDescription: "",
      explanations: []
    };
  },
  mounted() {
    this.headerText = WhatWeDo["header-text"];
    this.headerDescription = WhatWeDo["header-description"];
    this.explanations = WhatWeDo.explanations;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.background {
  background-color: #c971f3;
  .container {
    color: white;
    .header-text {
      justify-content: center;
      h1 {
        margin-top: 80px;
        margin-bottom: 40px;
        font-weight: 700;
        font-size: 40px;
      }
      p {
        width: 850px;
        margin-bottom: 120px;
        font-weight: 400;
        font-size: 16px;
      }
    }
    .section {
      margin-bottom: 130px;
      h1 {
        position: absolute;
        font-size: 300px;
        opacity: 0.1;
        margin-left: -100px;
        margin-top: -100px;
        font-weight: 400;
      }
      h3 {
        color: #ffff37;
        font-weight: 700;
        font-size: 30px;
        text-align: left;
        margin-bottom: 20px;
      }
      p {
        font-weight: 500;
        font-size: 20px;
        text-align: left;
        margin-bottom: 30px;
        line-height: 30px;
        width: 355px;
      }
      button {
        display: flex;
        border-radius: 100%;
        padding: 20px 20px;
        border: none;
        background-color: white;
        margin-bottom: 115px;
        .arrow-icon {
          color: #c971f3;
        }
      }
    }
  }
}
</style>