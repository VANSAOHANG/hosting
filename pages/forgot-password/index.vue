<template>
  <section
    class="login-container d-flex justify-content-center align-items-center"
  >
    <div class="form-forgot container m-auto">
      <div class="w-100 m-auto text-center p-4">
        <img
          class="img-fluid w-50"
          src="../../assets/images/logo/logo1.png"
          alt=""
        />
      </div>
      <div class="sub-main p-4">
        <div class="text ml-3 p-0">
          <h4>Forgot password</h4>
          <p>
            Please enter your email id to retrieve your password, we will send
            you verification code on this enail id.
          </p>
        </div>
        <form @submit.prevent="onSendEmail()" class="row">
          <div class="p-4 col-lg-12 mb-3 mt-3">
            <label for="email">EMAIL ADDRESS</label>
            <input
              type="email"
              class="form-control p-4"
              id="validationDefault01"
              placeholder="Your Email "
              required
            />
          </div>
          <div class="button">
            <button type="submit" class="btn btn-danger w-50">Send Code</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "login",

  data() {
    return {
      email: "",
    };
  },
  methods: {
    onSendEmail() {
      this.$router.push("/resetPw");
      console.log(this.$router);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/pages/forgot-password.scss";
</style>
