<template>
<div class="container">
    <div id="YearSummarised">
        <div class="title">
            <hr>
            <h2>{{title}}</h2>
        </div>
            <img class="img-fluid hero" :src="image" />
        <div class="description">
            <h2>{{description}}</h2>
        </div>
    </div>
</div>
</template>

<script>
import YearSummarised from "js-yaml-loader!../../content/YearSummarised.yaml";
export default {
   name: "YearSummarised",
  data() {
    return {
        title: [],
        description: [],
        image: [],
        link: [],
        template: [],
    };
  },

  mounted() {
    this.title = YearSummarised.title;
    this.description = YearSummarised.description;
    this.image = YearSummarised.image;
    this.link = YearSummarised.link;
    this.template = YearSummarised.template;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.title{
    margin-top: 5rem;
    margin-bottom: 3rem;
    hr{
        width: 330px;
        border-bottom: 4px solid #2B2D42;
        border-top: none;
        margin-left: 0px;
    }
    h2{
        text-align: left;
        margin-top: -13px;
        color:#2B2D42;
    }
}
.hero{
    width: 100vw;
    margin-top: -2rem;
    margin-bottom: 3rem;
}
.description{
    border-left: 2px solid black;
    height: 5rem;
    margin: 0 auto;
    margin-left: 13rem;
    max-width: 1000px;
    h2{
        text-align: left;
        margin-top: -3rem;
        padding-top: 1rem;
        padding-left: 1rem;
        font-style: italic;
    }
}
@media only screen and (max-width: 1000px){
    .description{
        margin-left: 0rem;
        height: 8rem;
    }
}
@media only screen and (max-width: 450px){
    .title{
        hr{
            width: 65%;
        }
    }
    .description{
         margin-left: 0rem;
          height: 8rem;
        h2{
            font-size: 30px;
        }
    }
}
</style>