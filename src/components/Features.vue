<template>
  <div class="container" id="features">
    <div v-if="separator" class="row separator">
      <hr class="line" />
      <p class="separator-text">{{ separator.toUpperCase() }}</p>
    </div>
    <div class="row">
      <div class="col-12 row header-text">
        <h2>{{ headerText }}</h2>
      </div>
      <div class="col-12 row header-text">
        <p>{{ headerDescription }}</p>
      </div>
      <div class="row">
        <div
          class="col-4 info-cards"
          v-for="feature in features"
          :key="feature.name"
        >
          <router-link :to="`${feature.template}/${feature.link}`">
            <div>
              <img :src="feature.image" />
              <h3>{{ feature.name }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from "js-yaml-loader!../../content/featurettes.yaml";
export default {
  name: "Features",
  data() {
    return {
      separator: "",
      headerText: "",
      headerDescription: "",
      features: [],
    };
  },
  mounted() {
    this.separator = Features["separator"];
    this.headerText = Features["header-text"];
    this.headerDescription = Features["header-description"];
    this.features = Features.features;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.separator {
  display: none;
}
.container {
  margin-bottom: 180px;
  .header-text {
    justify-content: center;
    h2 {
      margin-bottom: 40px;
      color: #ef233c;
    }
    p {
      width: 860px;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 60px;
      color: #7a7a7a;
    }
  }
  .info-cards {
    text-align: left;
    div {
      padding: 25px;
    }
    &:hover div {
      background-color: #2b2d42;
      h3,
      p {
        color: white;
      }
    }
    a:hover {
      text-decoration: none;
    }
    h3 {
      color: #333333;
      margin: 20px 0;
    }
    p {
      font-weight: 300;
      color: #7a7a7a;
      font-size: 16px;
      line-height: 25px;
    }
    img {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 768px) {
  .separator {
    display: block;
    position: absolute !important;
    left: 0;
    .line {
      width: 40px;
      position: absolute !important;
    }
    .separator-text {
      margin-left: 50px !important;
    }
  }
}
</style>