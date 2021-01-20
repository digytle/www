<template>
    <router-link :to="`/${storyBase.template}/${storyBase.link}`">
        <div class="container" id="story" >
            <div class="row-md-12 title">
                <img class="img-fluid logo" src="/assets/logo.png" />
                <p>Stories</p>
            </div>
            <div class="container">
                <div class="row padding element">
                    <div class="col-md-6">
                        <h2>{{story.title}}</h2>
                        <p>{{story.summary}}</p>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <img class="img-fluid" src="/assets/Digytle.stories.png" />
                    </div>
                </div>
            </div>
        </div>
    </router-link>
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
        storyBase: {}
    };
  },

  mounted() {
    this.storyBase = data.stories[0];
    this.story = require(`js-yaml-loader!../../content/${this.storyBase.template}/${this.storyBase.link}.yaml`);
    console.log(this.story)
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
        width: auto;
    }
    p{
        margin-top: 3rem;
        margin-left: 1rem;
        font-size: 25px;
    }
}
.element{
    h2{
        text-align: left;
        max-width: 611px;
        font-size: 35px;
    }
    p{
        text-align: left;
        max-width: 517px;
        margin-top: 2rem;
        margin-bottom: 6rem;
        font-size: 18px;
    }
    img{
        width: 406px;
        height: auto;
        margin-top: -5rem;
        transition: 0.3s;
        &:hover{
            width: 380px;
        }
    }
}
@media only screen and (max-width: 576px) {
  .title{
    display: block;
     p{
        margin-top: 1rem;
        margin-left: 0rem;
    }
    }
}
</style>