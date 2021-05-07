<template>
  <div class="container" id="latest-work">
    <div class="title">
      <hr class="line" />
      <h2>{{ title }}</h2>
    </div>

    <div class="row ourwork">
      <div class="col-lg-6 bigsection">
        <div class="image-container" v-for="item in big" :key="item.text">
          <div class="image-box">
            <div class="card">
              <router-link :to="`${item.template}/${item.link}`">
                <!-- <img class="card-img-top img" :src="item.image" /> -->
                <img src="/assets/auxta.logo.png" class="img">
                <img src="/assets/blits.bot.bg.png" class="img-bg">
                <img src="/assets/auxta.work.png" class="img-bot">
                <div class="card-body">
                  <h2>{{ item.title }}</h2>
                  <p>{{ item.description }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll col-lg-6">
        <div class="col-lg-6 section" id="section">
          <div class="image-container" v-for="item in left" :key="item.text">
              <router-link :to="`${item.template}/${item.link}`">
                <img class="img-fluid" :src="item.image" />
                <h2>{{ item.title }}</h2>
              </router-link>
              <p>{{ item.description }}</p>
          </div>
        </div>
        <div class="col-lg-6 section section1" id="section">
          <div
            class="image-container"
            v-for="item in right"
            :key="item.text"
          >
            <div class="image-box">
              <router-link :to="`${item.template}/${item.link}`">
                <img class="img-fluid" :src="item.image" />
                <h2>{{ item.title }}</h2>
              </router-link>
              <p>{{ item.description }}</p>
              <!-- <hr /> -->
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
      left: [],
      right: [],
      big: [],
    };
  },
  mounted() {
    this.title = LatestWork.title;
    this.description = LatestWork.description;
    this.left = LatestWork.left;
    this.right = LatestWork.right;
    this.big = LatestWork.big;
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
  margin-top: -4rem;
  margin-bottom: 1.5rem;
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
      .img {
        position: absolute;
        z-index: 1;
        // left: 7%;
        width: 100%;
      }
      .img-bg{
        position: relative;
        height: 100vh;
        width: 100%;
        margin-top: 0px;
        z-index: 0;
      }
      .img-bot{
        position: absolute;
        left: 0;
        bottom: 2rem;
        width: 100%;
      }
      .card-body {
        p {
          position: absolute;
          top: 13rem;
          color: white;
          text-align: left;
          font-size: 16px;
          padding-left: 2rem;
          padding-right: 2rem;
          font-family:  $font__menu;
        }
        h2 {
          position: absolute;
          color: white;
          font-size: 30px;
          top: 10%;
          padding-left: 2.1rem;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
}
.scroll {
  display: flex;
  .image-container {
    p {
      color: #51586D;
      font-size: 16px;
      text-align: left;
      margin-bottom: 2rem;
      padding-right: 0.7rem;
      font-family:  $font__menu;
    }
    h2 {
      position: relative;
      max-width: 250px;
      color: black;
      font-size: 24px;
      text-align: left;
      margin-top: -2rem;
      margin-left: 4rem;
      margin-bottom: 1.5rem;
      padding-top: 0.5rem;
      padding-left: 1rem;
      background-color: white;
      font-weight: 400;
    }
    a:hover {
      text-decoration: none;
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

@media only screen and (max-width: 1025px) and (orientation: landscape) {
  .scroll {
    .image-container {
      h2 {
        font-size: 22px;
        margin-left: 1rem;
        word-wrap: break-word;
      }
    }
  }
  .bigsection {
    .image-container {
      .card {
        .img {
          left: 0%;
          width: 100%;
        }
        .img-bot{
          left: 0%;
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: 769px) {
  .section1 {
    margin-right: -1rem;
  }
  .bigsection {
    .image-container {
      .card {
        .img {
          left: 8%;
          width: 90%;
        }
        .img-bg{
          position: relative;
          height: 80vh;
          width: 100%;
          margin-top: 0px;
          z-index: 0;
        }
        .img-bot{
          left: 8%;
          width: 80%;
        }
      }
    }
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
  .section1 {
    margin-left: 0rem;
  }
  .bigsection {
    .image-container {
      .card {
        .img {
          left: 0%;
          width: 100%;
        }
        .img-bg{
          position: relative;
          height: 50rem;
          width: 100%;
          margin-top: 0px;
          z-index: 0;
        }
        .img-bot{
          left: 0%;
          width: 100%;
        }
        .card-body {
        h2 {
          top: 5%;
          padding-left: 0rem;
          padding-right: 1.5rem;
        }
      }
      }
    }
  }
}

@media only screen and (max-width: 376px) {
  .bigsection {
    .image-container {
      .card {
        .img {
          left: 0%;
          width: 100%;
        }
        .img-bg{
          position: relative;
          height: 50rem;
          width: 100%;
          margin-top: 0px;
          z-index: 0;
        }
        .img-bot{
          left: 0%;
          width: 100%;
        }
        .card-body {
        h2 {
          top: 4%;
          padding-left: 0rem;
          padding-right: 1.5rem;
        }
        p{
            top: 23%;
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
          .img {
            left: 0%;
            width: 100%;
          }
          .img-bg{
            position: relative;
            height: 148vh;
            width: 100%;
            margin-top: 0px;
            z-index: 0;
          }
          .img-bot{
            left: 0%;
            width: 100%;
          }
          .card-body {
          h2 {
            top: 3%;
            padding-left: 0rem;
            padding-right: 1.5rem;
          }
          p{
            top: 19%;
          }
        }
      }
    }
  }
}
</style>