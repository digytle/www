<template>
  <div class="row">
    <h1>Digytle</h1>
    <div class="col-2">
      <p>{{privacy}}</p>
    </div>
    <div class="col-2">
      <p>{{contact}}</p>
    </div>
    <div class="col-2">
      <p>{{social}}</p>
    </div>
    <div class="col-4">
      <p>{{copyright}}</p>
    </div>
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
  font-weight: 700;
  font-size: 25px;
}
p {
  font-weight: 500;
  font-size: 14px;
  margin-left: 70px;
  margin-bottom: 0;
}
.col-4 {
  margin-left: auto;
}
</style>