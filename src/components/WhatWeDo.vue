<template>
  <div class="container" id="what-we-do">
    <div id="what-we-do">
      <div class="title">
        <hr class="line" />
        <h2>What we do</h2>
      </div>
      <div class="container-fluid padding">
        <div class="row padding element">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card long">
              <img
                class="card-img-top first-image"
                src="/assets/what-we-do-long-1.svg"
              />
              <div class="card-body">
                <h2 class="right-text">{{ headerFirst }}</h2>
                <p>{{ descriptionFirst }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card short">
              <img
                class="card-img-top first-image"
                src="/assets/what-we-do-short-1.svg"
              />
              <div class="card-body">
                <h2>{{ headerSecond }}</h2>
                <p>{{ descriptionSecond }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card long">
              <img
                class="card-img-top first-image"
                src="/assets/what-we-do-long-2.png"
              />
              <div class="card-body">
                <h2 class="right-text">{{ headerThird }}</h2>
                <p>{{ descriptionThird }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card short">
              <img
                class="card-img-top first-image"
                src="/assets/what-we-do-short-2.svg"
              />
              <div class="card-body">
                <h2>{{ headerForth }}</h2>
                <p>{{ descriptionForth }}</p>
              </div>
            </div>
          </div>
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
      headerFirst: [],
      descriptionFirst: [],

      headerSecond: [],
      descriptionSecond: [],

      headerThird: [],
      descriptionThird: [],

      headerForth: [],
      descriptionForth: [],
    };
  },

  mounted() {
    this.headerFirst = WhatWeDo.headerFirst;
    this.descriptionFirst = WhatWeDo.descriptionFirst;

    this.headerSecond = WhatWeDo.headerSecond;
    this.descriptionSecond = WhatWeDo.descriptionSecond;

    this.headerThird = WhatWeDo.headerThird;
    this.descriptionThird = WhatWeDo.descriptionThird;

    this.headerForth = WhatWeDo.headerForth;
    this.descriptionForth = WhatWeDo.descriptionForth;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.title {
  margin-left: 1rem;
  margin-top: 5rem;
  hr {
    width: 200px;
    border-bottom: 4px solid #2b2d42;
    margin-left: 0px;
  }
  h2 {
    color: #2B2D42;
    text-align: left;
    margin-top: -1rem;
  }
}
.element {
  margin-top: -2rem;
  .long,
  .short {
    border: none;
    margin-top: 2rem;
    h2 {
      margin-top: -4rem;
      height: 5rem;
      padding: 1rem;
      font-size: 24px;
      background-color: white;
    }
    .right-text {
      margin-left: 2rem;
      width: 100%;
      text-align: left;
    }
    p {
      color: #51586D;
      font-size: 16px;
      text-align: left;
      margin-left: -1rem;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .element {
    .long,
    .short {
      h2 {
        margin-bottom: 3rem;
      }
    }
  }
}
</style>