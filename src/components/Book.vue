<template>
  <div>
    <div class="row">
      <div class="container">
        <div class="row section">
          <div>
            <h2>{{ title }}</h2>
            <p v-for="paragraph in description" :key="paragraph">{{ paragraph }}</p>
          </div>
          <img :src="image" />
        </div>
      </div>
    </div>
    <div class="buy-book">
      <div class="container">
        <div class="book" v-for="book in data.books" :key="book.question">
          <h2>{{ book.question }}</h2>
          <p>{{ book.text }}</p>
        </div>
        <div class="col-3">
          <router-link :to="data.link">
            <button v-if="data.button">
              <p>{{ data.button }}</p>
            </button> </router-link
          ><img
            v-for="book in data.books"
            :key="book.question"
            :src="book.image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  name: "Featurette",
  components: { Footer },
  data() {
    return {
      data: {},
      logoBlack: {},
      home: "",
      about: "",
      work: "",
      contacts: "",
      description: "",
      title: "",
      image: {},
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/book.yaml`);
    this.description = this.data.description;
    this.title = this.data.title;
    this.image = this.data.image;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.row {
  margin-right: 0;
}
.buy-book {
  background-color: #edf2f4;
  padding-top: 120px;
  .book {
    p {
      color: #8d99ae;
      text-align: left;
      width: 687px;
      margin: 30px auto 35px;
    }
  }
  .col-3 {
    margin: 0 auto;
    img {
      margin-bottom: 70px;
    }
  }
  button {
    background-color: #ef233c;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    border-color: transparent;
    outline: none;
    margin-bottom: 10px;
    p {
      color: #ffffff;
      margin: 0;
    }
  }
}
.container {
  .row {
    margin: 100px auto 130px;
    align-items: center;
  }
  .section {
    flex-direction: row-reverse;
    img {
      width: 300px;
      height: 425px;
      margin-right: 180px;
    }
    p {
      text-align: left;
      max-width: 625px;
      color: #8d99ae;
    }
    h2 {
      text-align: left;
      margin-bottom: 30px;
      margin-top: 30px;
    }
  }
}
</style>