<template>
  <div class="s-error">
    <div class="container h-100 d-flex justify-content-center align-items-center">
      <div class="error-container rounded shadow-sm p-3 text-center">
        <div v-if="error.statusCode === 404">
          <h1 class="notFound">
            {{ 404 }}
          </h1>
          <h1>
            {{ pageNotFound }}
          </h1>
          <p>{{ desc }}</p>
        </div>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <div class="mt-5">
          <ButtonMain :link="'/dashboard'" title="Back Home" aLeft="True"></ButtonMain>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import ButtonMain from '../components/buttons/ButtonMain.vue';
export default {
  name: "EmptyLayout",
  components: { ButtonMain },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      404: "404 Not Found",
      pageNotFound: "OOP! PAGE NOT FOUND",
      desc: "Sorry, the page you're looking for doesn't exist in here.",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style  lang="scss">
@import "~assets/sass/layouts/error.scss";
</style>
