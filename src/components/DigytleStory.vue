<template>
    <div>
        {{data}}
    </div>
</template>

<script>
export default {
   name: "DigytleStory",
  data() {
    return {
        data: {}
    };
  },

  mounted() {
    this.data = require(`js-yaml-loader!../../content/stories/${this.$route.params.pathMatch}.yaml`);
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