<template>
  <section class="login-container d-flex justify-content-center align-items-center">
    <div class="loginform m-auto">
      <div class="main-card shadow-sm rounded">
        <div class="main-img w-50 m-auto">
          <img class="img-fluid w-75" src="../../assets/images/logo/logo1.png" alt="" />
        </div>
        <div class="text justify-content-center mt-5">
          <h4>Welcome to Aditi</h4>
          <p>Please sing-in to your account</p>
        </div>

        <form @submit.prevent="login">
          <b-form-group class="form-text mt-4" label="Email" label-for="email" description="">
            <b-form-input v-model="email" class="shadow-none form-text" id="email" type="email"
              placeholder="Enter email" required>
            </b-form-input>
          </b-form-group>

          <b-form-group class="form-text mt-4 position-relative" label="Password" label-for="password"
            :description="errorMessage">
            <b-form-input v-if="showPassword" class="shadow-none form-text" id="password" v-model="password" type="text"
              placeholder="" required>
            </b-form-input>
            <b-form-input v-else class="shadow-none form-text" id="showPassword" v-model="password" type="password"
              placeholder="........." required>
            </b-form-input>
            <b-icon class="position-absolute" :icon="showPassword ? 'eye-fill' : 'eye-slash-fill'"
              @click="showPassword = !showPassword"></b-icon>
          </b-form-group>
          <div class="btns w-100">
            <nuxt-link to="forgot-password" @click.prevent="onForget">Forgot your password?</nuxt-link>
            <BtnSubmit title="Login"></BtnSubmit>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import BtnSubmit from "../../components/buttons/BtnSubmit.vue";

export default {
  layout: "login",
  auth: "guest",
  components: { BtnSubmit },
  data() {
    return {
      showPassword: false,
      password: "",
      email: null,
      errorMessage: '',
    };
  },
  computed: {
    formLogin() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    async login() {
      // if (this.$refs.form_login.validate()) {
      try {
        let res = await this.$auth.loginWith("cookie", {
          data: this.formLogin,
        });
        if (res.data.message_details) {
          this.error_messages = res.data.message_details;
        }

        if (res.data.message) {
          this.credential_message = res.data.message;
          this.credential_error = true;
        }

        if (res.data.access_token) {
          let user = await this.$auth.fetchUser();

          const redirect = this.$cookies.get("auth.redirect");
          if (user) {
            this.$router
              .push({
                path: redirect ? redirect : this.localePath("/"),
              })
              .catch(() => { });
          }
        }
      } catch (e) {
        console.log(e)
        if (e.response.status == 500) {
          this.credential_message = "Server Error.";
          this.credential_error = true;
          console.log(e);
        }
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    onForget() {
      this.$router.push("/forgot-password");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/pages/login.scss";
</style>
