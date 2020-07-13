<template>
  <div class="container row">
    <div class="col-6">
      <h1>{{logoText}}</h1>
    </div>
    <div class="col-6">
      <div class="row">
        <button>{{home}}</button>
        <button>{{about}}</button>
        <button>{{work}}</button>
        <button>{{contacts}}</button>
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
    this.textLogo = navigation["logo-text"];
    this.home = navigation.home;
    this.about = navigation.about;
    this.work = navigation.work;
    this.contacts = navigation.contacts;
  }
};
</script>