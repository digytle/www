<template>
    <div class="container" id="story">
        <div class="row-md-12 title">
            <img class="img-fluid logo" src="/assets/logo.png" />
            <p>Stories</p>
        </div>
        <div class="container">
            <div class="row padding element">
                <div class="col-md-6">
                    <h2>{{title}}</h2>
                    <p>{{summary}}</p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid" src="/assets/Digytle.stories.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Stories from "js-yaml-loader!../../content/stories.yaml";
export default {
   name: "Stories",
  data() {
    return {
      title: [],
      summary: [],
    };
  },

  mounted() {
    this.title = Stories.title;
    this.summary = Stories.summary;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.title{
    display: flex;
    margin-top: 10rem;
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
    }
}
</style>