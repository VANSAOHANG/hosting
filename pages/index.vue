<template>
  <div id="home">
    <h1>Homepage</h1>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],

  name: "HomePage",

  head() {
    return {
      title: "Aditi-Hr",
    };
  },

  data() {
    return {
      message: "",
    };
  },

  // methods: {
  //   async getExample() {
  //     const res = await this.$api.example.index();
  //     this.message = res.message;
  //   },
  // },

  // created() {
  //   this.getExample();
  // },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/pages/home.scss";
</style>
