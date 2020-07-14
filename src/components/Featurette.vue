<template>
  <div class="row">
      {{data}}
  </div>
</template>

<script>
export default {
  name: "Featurette",
  data() {
    return {
        data: {}
    };
  },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
  }
};
</script>

<style scoped>
</style>