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
        <div class="row">
          <button>
            <p>{{button}}</p>
          </button>
        </div>
      </div>
      <div class="col-6">
        <img src="../../public/assets/Image 24.png" />
      </div>
    </div>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content/header.yaml";
export default {
  name: "Header",
  data() {
    return {
      text: "",
      description: "",
      button: ""
    };
  },
  mounted() {
    this.text = header.text;
    this.description = header.description;
    this.button = header.button;
  }
};
</script>