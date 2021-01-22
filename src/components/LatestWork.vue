<template>
  <div class="container" id="latest-work">
    <div class="title">
      <hr class="line" />
      <h2>{{ title }}</h2>
    </div>

    <div class="row ourwork">
      <div class="col-lg-6 bigsection">
        <div class="image-container" v-for="item in bigWork" :key="item.text">
          <div class="image-box">
            <div class="card">
              <router-link :to="`${item.template}/${item.link}`">
                <img class="card-img-top img" :src="item.image" />
                <div class="card-body">
                  <p>{{ item.description }}</p>
                  <h2>{{ item.title }}</h2>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll col-lg-6">
        <div class="col-lg-6 section" id="section">
          <div class="image-container" v-for="item in work" :key="item.text">
            <div class="image-box" v-for="item in work" :key="item.text">
              <router-link :to="`${item.template}/${item.link}`">
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
              <router-link :to="`${item.template}/${item.link}`">
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
.container {
  padding: 1.8rem;
  scroll-snap-type: y;
}
.title {
  hr {
    width: 220px;
    border-bottom: 4px solid #2b2d42;
    margin-left: 0px;
  }
  h2 {
    color: #2b2d42;
    text-align: left;
    margin-top: -1rem;
  }
}
.bigsection {
  a:hover {
    text-decoration: none;
  }
  .image-container {
    position: sticky;
    top: 0px;
    .card {
      border: none;
      .card-body {
        p {
          margin-top: -40rem;
          color: white;
          font-size: 14px;
          padding-left: 2rem;
          padding-right: 2rem;
        }
        h2 {
          color: white;
          font-size: 30px;
        }
      }
    }
  }
}
.scroll {
  display: flex;
  .image-container {
    p {
      color: black;
      font-size: 14px;
      text-align: left;
      margin-top: 1rem;
      padding-right: 0.7rem;
    }
    h2 {
      max-width: 315px;
      color: black;
      font-size: 20px;
      margin-top: 0px;
      text-align: left;
      margin-bottom: 3rem;
    }
    hr {
      width: 60%;
      margin-left: 0px;
      border-bottom: 3px solid #ef233c;
      border-top: none;
    }
  }
}
.section {
  padding: 0rem;
  img {
    width: 95%;
    margin-left: -1rem;
  }
}
.section1 {
  margin-left: 1rem;
}
::-webkit-scrollbar {
  display: none;
}
@media only screen and (max-width: 1100px) {
  .bigsection {
    .image-container {
      .card {
        .card-body {
          p {
            margin-top: -25rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 991.5px) {
  .bigsection {
    position: relative;
  }
}
@media only screen and (max-width: 768px) {
  
    .section1 {
    margin-right: -1rem;
  }
}
@media only screen and (max-width: 450px) {
  .ourwork {
    padding: 0px;
  }
  .scroll {
    display: block;
    margin-left: 0px;
    .image-container {
      width: 105%;
    }
  }
  .bigsection {
    .image-container {
      .card {
        border: none;
        .card-body {
          p {
            margin-top: -20rem;
          }
          h2 {
            margin-top: 0px;
            color: white;
          }
        }
      }
    }
  }
  .section1 {
    margin-left: 0rem;
  }
}
@media only screen and (max-width: 376px) {
  .bigsection {
    .image-container {
      .card {
        .card-body {
          h2 {
            margin-top: 0px;
            color: black;
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 360px) {
  .ourwork {
    padding: 0px;
  }
  .scroll {
    display: block;
    margin-left: 0px;
    .image-container {
      width: 105%;
    }
  }
  .bigsection {
    .image-container {
      .card {
        .card-body {
          h2 {
            margin-top: 0px;
            color: black;
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 320px) {
  .bigsection {
    .image-container {
      .card {
        .card-body {
          h2 {
            margin-top: 0px;
            color: black;
            margin-top: -5rem;
          }
        }
      }
    }
  }
}
</style>