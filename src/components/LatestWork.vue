<template>
  <div class="container" id="latest-work">
    <div v-if="separator" class="row separator">
      <hr class="line" />
      <p class="separator-text">{{ separator.toUpperCase() }}</p>
    </div>
    <div class="row">
      <div class="col-12 row header-text">
        <h2>{{ title }}</h2>
      </div>
      <div class="col-12 row header-text">
        <p>{{ description }}</p>
      </div>
      <div class="col-4 col-md-4 col-lg-12 col-xl-12 row section">
        <div class="image-container" v-for="item in work" :key="item.text">
          <div class="image-box">
            <p>{{ item.title }}</p>
            <router-link :to="`${item.template}/${item.url}`">
              <button>
                <b-icon class="arrow-icon" icon="arrow-right"></b-icon>
              </button>
            </router-link>
          </div>
          <img class="images" :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LatestWork from "js-yaml-loader!../../content/work.yaml";
export default {
  name: "LatestWork",
  data() {
    return {
      title: "",
      description: "",
      work: [],
    };
  },
  mounted() {
    this.separator = LatestWork.separator;
    this.title = LatestWork.title;
    this.description = LatestWork.description;
    this.work = LatestWork.work;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";
.separator {
  display: none;
}
.header-text {
  justify-content: center;
  h2 {
    color: #2b2d42;
    margin-bottom: 40px;
  }
  p {
    width: 860px;
    line-height: 30px;
    color: #8d99ae;
    margin-bottom: 80px;
  }
}
.section {
  justify-content: center;
  margin-bottom: 170px;
  .image-container {
    height: 300px;
    margin-right: 35px;
    .images {
      width: 300px;
      height: 300px;
    }
    &:hover {
      background-color: #ef233c;
      .images {
        visibility: hidden;
      }
      .image-box {
        display: block;
      }
    }
  }
  .image-box {
    display: none;
    color: white;
    max-width: 300px;
    max-height: 300px;
    p {
      margin: 100px auto 30px;
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
@media only screen and (max-width: 768px) {
  .separator {
    display: block;
    text-align: left;
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
  .section {
    margin: 0 auto 50px;
    justify-content: center;
    .image-container {
      margin: 0 auto 50px;
    }
  }
}
</style>