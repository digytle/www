<template>
        <div class="container" id="story" >
            <div class="row-md-12 title">
                <img class="img-fluid logo" src="/assets/logo.png" />
                <p>Stories</p>
            </div>
            <div class="container">
                <div class="row padding element">
                    <div class="col-md-6">
                        <router-link :to="`/${storyBase.template}/${storyBase.link}`">
                            <h2>{{ text }}</h2>
                            <p>{{ description }}</p>
                        </router-link>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <router-link :to="`/${storyBase.template}/${storyBase.link}`">
                            <img class="img-fluid" src="/assets/Digytle.stories.png" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import data from "js-yaml-loader!../../content/stories.yaml";
export default {
   name: "DigytleStoryPreview",
  data() {
    return {
        title: [],
        summary: [],
        features: [],
        story: {},
        storyBase: {},
        text: "",
        description: "",
    };
  },

  mounted() {
    this.storyBase = data.stories[0];
    this.story = require(`js-yaml-loader!../../content/${this.storyBase.template}/${this.storyBase.link}.yaml`);
    console.log(this.story)
    this.text = data.text;
    this.description = data.description;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.title{
    display: flex;
    margin-top: 2rem;
    margin-left: 1rem;
    img{
        height: 107px;
    }
    p{
        margin-top: 3rem;
        margin-left: 1rem;
        font-size: 25px;
    }
}
.element{
    a:hover {
      text-decoration: none;
    }
    h2{
        text-align: left;
        max-width: 611px;
        font-size: 35px;
        color: #2B2D42;
    }
    p{
        text-align: left;
        max-width: 517px;
        margin-top: 2rem;
        margin-bottom: 6rem;
        font-size: 16px;
        color: #51586D;
        font-family:  $font__menu;
    }
    img{
        margin-top: -7rem;
    }
}
@media only screen and (max-width: 900px) {
  .element{
        img{
            margin-top: -2rem;
            margin-bottom: 5rem;
        }
    }
}
@media only screen and (max-width: 400px) {
  .element{
        img{
            margin-top: -5rem;
        }
    }
}
@media only screen and (max-width: 576px) {
  .title{
    display: block;
    p{
        margin-top: 1rem;
        margin-left: 0rem;
        padding-right: 2rem;
    }
    img{
        height: auto;
        width: auto;
        padding-right: 2rem;
    }
}
}
</style>