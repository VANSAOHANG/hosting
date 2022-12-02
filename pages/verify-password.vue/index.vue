<template>
  <div class="verifyPw">
    <div class="form-container m-auto p-4 rounded">
      <b-form @submit="onSubmit">
        <div class="w-25 mx-auto my-3">
          <b-img
            :src="require('@/assets/images/logo/logo1.png')"
            fluid
            alt="Aditi Logo"
          >
          </b-img>
        </div>
        <p class="mt-4 form-text">To continue, Please verify it's you</p>
        <b-form-group
          class="form-text"
          id="input-group-1"
          label="Password"
          label-for="password"
          description=""
        >
          <b-form-input
            v-if="showPassword"
            class="shadow-none"
            id="password"
            v-model="password"
            type="text"
            placeholder=""
            required
          >
          </b-form-input>
          <b-form-input
            v-else
            class="shadow-none"
            id="password"
            v-model="password"
            type="password"
            placeholder="........."
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4">
          <b-form-checkbox class="form-text" v-model="showPassword">
            Show password
          </b-form-checkbox>
        </b-form-group>
        <div class="d-flex justify-content-between mt-5">
          <span
            class="forgot-pw d-flex align-items-center"
            role="button"
            @click="$router.push('/about')"
            >Forgot password?</span
          >
          <BtnSubmit title="Next" isArrow="True"></BtnSubmit>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import BtnSubmit from "../../components/buttons/BtnSubmit.vue";
export default {
  middleware: ["auth"],
  components: { BtnSubmit },
  data() {
    return {
      password: "",
      showPassword: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.password);
      this.password = "";
      this.$router.push("/about");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/pages/reset-password.scss";
</style>
