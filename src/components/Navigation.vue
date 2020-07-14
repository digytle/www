<template>
  <div class="row navigation">
    <div class="col-6 logo">
      <h1 class="logo">{{logoText}}</h1>
    </div>
    <div class="col-6 buttons">
      <div class="row">
        <button>{{home}}</button>
        <button>{{about}}</button>
        <button>{{work}}</button>
        <button>{{contacts}}</button>
        <button>
          <b-icon icon="search"></b-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "js-yaml-loader!../../content/navigation.yaml";
export default {
  name: "Navigation",
  data() {
    return {
      logoText: "",
      home: "",
      about: "",
      work: "",
      contacts: ""
    };
  },
  mounted() {
    this.logoText = navigation["logo-text"];
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.navigation {
  position: fixed;
  width: 100%;
  z-index: 1;
  max-height: 50px;
  color: #464646;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 100px;
  font-family: $font__public;
  font-weight: 700;
  .logo {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    h1 {
      font-weight: 700;
      font-size: 25px;
      margin-left: 60px;
    }
  }
  button {
    font-size: 14px;
    border: none;
    background-color: transparent;
    margin: 0 20px;
    font-weight: 500;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>