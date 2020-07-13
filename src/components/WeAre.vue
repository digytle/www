<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <h1>{{text}}</h1>
        </div>
        <div class="row">
          <p>{{description}}</p>
        </div>
      </div>
      <div class="col-6">
        <div class="empty-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import weAre from "js-yaml-loader!../../content/we-are.yaml";
export default {
  name: "WeAre",
  data() {
    return {
      text: "",
      description: ""
    };
  },
  mounted() {
    this.text = weAre.text;
    this.description = weAre.description;
  }
};
</script>

<style scoped>
.empty-box {
  width: 400px;
  height: 300px;
  background-color: #b5b5b5;
}
</style>