<template>
  <div class="container" id="latest-work">
    <div class="col-12 row header-text">
        <h2>{{ title }}</h2>
    </div>
    <div class="row-lg-12 ourwork">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 row bigsection">
        <div class="image-container" v-for="item in bigWork" :key="item.text">
          <div class="image-box">
            <img class="images" :src="item.image" />
            <p>{{ item.description }}</p>
            <hr>
            <h2>{{ item.title }}</h2>
            <router-link :to="`${item.template}/${item.url}`">
              <button>
                <b-icon class="arrow-icon" icon="arrow-right"></b-icon>
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 row section" id="section">
        <div class="image-container" v-for="item in work" :key="item.text">
          <div class="image-box">
            <img class="images" :src="item.image" />
            <p>{{ item.description }}</p>
            <hr>
            <h2>{{ item.title }}</h2>
            <router-link :to="`${item.template}/${item.url}`">
              <button>
                <b-icon class="arrow-icon" icon="arrow-right"></b-icon>
              </button>
            </router-link>
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
      bigWork: [],
    };
  },
  mounted() {
    this.title = LatestWork.title;
    this.description = LatestWork.description;
    this.work = LatestWork.work;
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
    margin-bottom: 40px;
  }
}
.ourwork{
  overflow: scroll;
  scroll-behavior: smooth;
  height: 665px;
  margin-bottom: 7rem;
}
.bigsection{
  position: absolute;
  justify-content: center;
  margin-bottom: 170px;
  .image-container {
  height: 300px;
  margin-right: 35px;
    .images {
    width: 536px;
    height: 665px;
    margin-left: -6rem;
    }
    p{
      margin-top: -30rem;
      max-width: 315px;
      color: white;
      }
    h2{
      max-width: 315px;
      color: white;
    }
  }
}
.section{
  margin-left: 40rem;
    .image-container {
      margin-right: 70px;
      width: 15rem;
      .images {
        width: 250px;
        height: 250px;
      }
      p{
        max-width: 315px;
        color: black;
        font-size: 14px;
      }
      h2{
        max-width: 315px;
        color: black;
        font-size: 15px;
        margin-top: 0px;
      }
  }
    
}
::-webkit-scrollbar {
    display: none;
}

// .section {
//   justify-content: center;
//   margin-bottom: 170px;
//   .image-container {
//     height: 300px;
//     margin-right: 35px;
//     .images {
//       width: 300px;
//       height: 300px;
//     }
//     &:hover {
//       background-color: #ef233c;
//       .images {
//         visibility: hidden;
//       }
//       .image-box {
//         display: block;
//       }
//     }
//   }
//   .image-box {
//     display: none;
//     color: white;
//     max-width: 300px;
//     max-height: 300px;
//     p {
//       margin: 100px auto 30px;
//       font-weight: 700;
//       font-size: 40px;
//     }
//     button {
//       border-radius: 100%;
//       padding: 20px 23px;
//       border: none;
//       background-color: white;
//       .arrow-icon {
//         color: #c971f3;
//       }
//     }
//   }
// }
@media only screen and (max-width: 576px) {
  .section {
    margin: 0 auto 50px;
    justify-content: center;
    .image-container {
      margin: 0 auto 50px;
    }
  }
}

</style>