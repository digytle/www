<template>
  <div class="row">
    <h1>Digytle</h1>
    <p>{{privacy}}</p>
    <p>{{contact}}</p>
    <p>{{social}}</p>
    <p>{{copyright}}</p>
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content/footer.yaml";
export default {
  name: "Footer",
  data() {
    return {
      privacy: "",
      contact: "",
      social: "",
      copyright: ""
    };
  },
  mounted() {
    this.privacy = footer.privacy;
    this.contact = footer.contact;
    this.social = footer.social;
    this.copyright = footer.copyright;
  }
};
</script>

<style scoped>
.row {
  background-color: #333333;
  height: 150px;
  color: white;
  align-items: center;
  margin-top: 180px;
}
h1 {
  margin-left: 60px;
}
p {
  margin-left: 50px;
}
</style>