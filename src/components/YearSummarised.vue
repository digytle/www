<template>
<div class="container">
    <div id="YearSummarised">
        <div class="title">
            <hr>
            <h2>{{title}}</h2>
        </div>
        <img class="img-fluid hero" src="/assets/yearSummarised.png" />
        <div class="description">
            <hr>
            <h4>{{date}}</h4>
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
        date: [],
        description: [],
    };
  },

  mounted() {
    this.title = YearSummarised.title;
    this.date = YearSummarised.date;
    this.description = YearSummarised.description;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.title{
    margin-bottom: 3rem;
    hr{
        width: 360px;
        border-bottom: 4px solid #2B2D42;
        border-top: none;
        margin-left: 0px;
    }
    h2{
        text-align: left;
        margin-top: -10px;
    }
}
.hero{
    width: 100vw;
    margin-top: -2rem;
    margin-bottom: 3rem;
}
.description{
    margin-top: -2rem;
    hr{
        width: 150px;
        border-bottom: 3px solid #2B2D42;
        border-top: none;
        margin-left: 0px;
    }
    h4{
        text-align: left;
    }
    h2{
        text-align: left;
        max-width: 964px;
        margin-top: 0px;
    }
}
</style>