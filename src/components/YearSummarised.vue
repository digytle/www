<template>
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
    margin-left: 3rem;
    hr{
        width: 200px;
        border-bottom: 8px solid #2B2D42;
        margin-left: 0px;
    }
    h2{
        text-align: left;
        margin-top: 0px;
    }
}
.hero{
    width: 100vw;
    padding: 3rem;
}
.description{
    margin-left: 3rem;
    hr{
        width: 150px;
        transform: rotate(90deg);
        border-bottom: 4px solid #2B2D42;
        margin-left: -4.5rem;
        margin-top: 6rem;
    }
    h4{
        text-align: left;
        margin-top: -6rem;
        margin-left: 1rem;
    }
    h2{
        text-align: left;
        max-width: 964px;
        font-size: 50px;
        margin-top: 0px;
        margin-left: 1rem;
    }
}
</style>