<template>
  <div class="container" id="latest-work">
    <div class="col-12 row header-text">
      <h2>{{ title }}</h2>
    </div>

    <div class="row ourwork">
      <div class="col-lg-6 bigsection">
        <div class="image-container" v-for="item in bigWork" :key="item.text">
          <div class="image-box">
            <div class="card">
              <router-link :to="`${item.template}/${item.url}`">
                <img class="card-img-top" :src="item.image" />
              </router-link>
              <div class="card-body">
                <p>{{ item.description }}</p>
                <h2>{{ item.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll col-lg-6">
        <div class="col-lg-6 section" id="section">
          <div class="image-container" v-for="item in work" :key="item.text">
            <div class="image-box">
              <router-link :to="`${item.template}/${item.url}`">
                <img class="img-fluid" :src="item.image" />
              </router-link>
              <p>{{ item.description }}</p>
              <hr />
              <h2>{{ item.title }}</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-6 section section1" id="section">
          <div
            class="image-container"
            v-for="item in workright"
            :key="item.text"
          >
            <div class="image-box">
              <router-link :to="`${item.template}/${item.url}`">
                <img class="img-fluid" :src="item.image" />
              </router-link>
              <p>{{ item.description }}</p>
              <hr />
              <h2>{{ item.title }}</h2>
            </div>
          </div>
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
      workright: [],
      bigWork: [],
    };
  },
  mounted() {
    this.title = LatestWork.title;
    this.description = LatestWork.description;
    this.work = LatestWork.work;
    this.workright = LatestWork.workright;
    this.bigWork = LatestWork.bigWork;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";
.header-text {
  justify-content: center;
  h2 {
    color: #2b2d42;
  }
}
.ourwork {
  padding: 5rem;
}
.bigsection {
  .image-container {
    .card {
      width: 100%;
      border: none;
      .card-body {
        p {
          position: absolute;
          margin-top: -30rem;
          padding-left: 1rem;
          padding-right: 2rem;
        }
        h2 {
          position: relative;
          margin-top: -20rem;
        }
      }
    }
    p {
      color: white;
      font-size: 14px;
    }
    h2 {
      color: white;
      font-size: 30px;
    }
  }
}
.scroll {
  overflow-y: scroll;
  display: flex;
  height: 95vh;
  .image-container {
    margin-bottom: 4rem;
    p {
      color: black;
      font-size: 14px;
      text-align: left;
    }
    h2 {
      max-width: 315px;
      color: black;
      font-size: 20px;
      margin-top: 0px;
      text-align: left;
    }
    hr {
      width: 60%;
      margin-left: 0px;
      border-bottom: 3px solid #ef233c;
      border-top: none;
    }
  }
}
.section1 {
  margin-top: 5rem;
}
::-webkit-scrollbar {
  display: none;
}
@media only screen and (max-width: 1100px) {
  .scroll {
    height: 30rem;
  }
  .bigsection {
    .image-container {
      .card {
        .card-body {
          p {
            position: absolute;
            margin-top: -25rem;
            margin-left: -2rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
          h2 {
            position: relative;
            margin-top: -10rem;
          }
          hr {
            margin-top: -12rem;
            margin-left: 7rem;
            position: absolute;
          }
        }
      }
    }
  }
}
@media only screen and (orientation: landscape) {
  .scroll {
    height: 45rem;
  }
}
@media only screen and (max-width: 450px) {
  .ourwork {
    padding: 0px;
  }
  .scroll {
    display: block;
    margin-left: 0px;
    padding-left: 2.5rem;
    .image-container {
      width: 15rem;
    }
  }
  .bigsection {
    padding-left: 5.5rem;
    padding-right: 5rem;
    .image-container {
      .card {
        width: 20rem;
        border: none;
        margin-left: -4.5rem;
        margin-right: auto;
        .card-body {
          padding: 2rem;
          p {
            position: absolute;
            margin-top: -25rem;
            margin-left: -2rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          h2 {
            position: relative;
            margin-top: -10rem;
          }
        }
      }
    }
  }
}
</style>