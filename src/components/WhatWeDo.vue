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
              <router-link :to="`${templateFirst}/${linkFirst}`">
                <img
                  class="card-img-top first-image"
                  src="/assets/Progressive-Products.png"
                />
              </router-link>
              <div class="card-body">
                <router-link :to="`${templateFirst}/${linkFirst}`">
                  <h2 class="right-text">{{ headerFirst }}</h2>
                </router-link>
                <p>{{ descriptionFirst }}</p>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card short">
              <router-link :to="`${templateSecond}/${linkSecond}`">
                <img
                  class="card-img-top first-image"
                  src="/assets/talent-scouting.png"
                />
              </router-link>
              <div class="card-body">
                <router-link :to="`${templateSecond}/${linkSecond}`">
                  <h2>{{ headerSecond }}</h2>
                </router-link>
                <p>{{ descriptionSecond }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card long">
              <router-link :to="`${templateThird}/${linkThird}`">
                <img
                  class="card-img-top first-image"
                  src="/assets/testing-automation.png"
                />
              </router-link>
              <div class="card-body">
                <router-link :to="`${templateThird}/${linkThird}`">
                  <h2 class="right-text">{{ headerThird }}</h2>
                </router-link>
                <p>{{ descriptionThird }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card short">
              <router-link :to="`${templateForth}/${linkForth}`">
                <img
                  class="card-img-top first-image"
                  src="/assets/pioner-thinking.png"
                />
              </router-link>
              <div class="card-body">
                <router-link :to="`${templateForth}/${linkForth}`">
                  <h2>{{ headerForth }}</h2>
                </router-link>
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
      linkFirst: [],
      templateFirst: [],

      headerSecond: [],
      descriptionSecond: [],
      linkSecond: [],
      templateSecond: [],

      headerThird: [],
      descriptionThird: [],
      linkThird: [],
      templateThird: [],

      headerForth: [],
      descriptionForth: [],
      linkForth: [],
      templateForth: [],
    };
  },

  mounted() {
    this.headerFirst = WhatWeDo.headerFirst;
    this.descriptionFirst = WhatWeDo.descriptionFirst;
    this.linkFirst = WhatWeDo.linkFirst;
    this.templateFirst = WhatWeDo.templateFirst;

    this.headerSecond = WhatWeDo.headerSecond;
    this.descriptionSecond = WhatWeDo.descriptionSecond;
    this.linkSecond = WhatWeDo.linkSecond;
    this.templateSecond = WhatWeDo.templateSecond;

    this.headerThird = WhatWeDo.headerThird;
    this.descriptionThird = WhatWeDo.descriptionThird;
    this.linkThird = WhatWeDo.linkThird;
    this.templateThird = WhatWeDo.templateThird;

    this.headerForth = WhatWeDo.headerForth;
    this.descriptionForth = WhatWeDo.descriptionForth;
    this.linkForth = WhatWeDo.linkForth;
    this.templateForth = WhatWeDo.templateForth;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.title {
  margin-left: 1rem;
  margin-top: 5rem;
  margin-bottom: 1.4rem;
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
  margin-top: -1rem;
  .long,
  .short {
    border: none;
    margin-top: 2rem;
    a{
      color: #2B2D42;
    }
    a:hover {
      text-decoration: none;
    }
    h2 {
      margin-top: -4rem;
      padding: 1rem;
      font-size: 24px;
      background-color: white;
      // box-shadow: -5px -1px 17px 8px rgba(0,0,0,0.1);
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
      font-family:  $font__menu;
    }
  }
}
@media only screen and (max-width: 1100px) {

}
@media only screen and (max-width: 800px) {
  .title {
  margin-left: 1rem;
  margin-top: 7rem;
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
}
</style>