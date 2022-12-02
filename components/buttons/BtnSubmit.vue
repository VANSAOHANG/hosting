<template>
  <!-- <b-link :to="link" class="btn-main rounded shadow-none border-0 text-decoration-none"> {{ title }} <b-icon-arrow-right-short></b-icon-arrow-right-short></b-link> -->
  <b-button type="submit" variant="" class="btn-submit shadow-none border-0">
    {{ title }}
    <b-icon-arrow-right-short v-if="isArrow"></b-icon-arrow-right-short>
  </b-button>
</template>
<script>
export default {
  name: "btn-submit",
  props: ["title", "isArrow"],
};
</script>
<style lang="scss">
@import "@/assets/sass/components/button";
</style>
