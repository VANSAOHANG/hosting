<template>
  <div class="resetPw p-3">
    <div class="form-container m-auto shadow-sm p-5 rounded">
      <b-form @submit="onSubmit">
        <div class="w-50 mx-auto my-3">
          <b-img
            :src="require('@/assets/images/logo/logo1.png')"
            fluid
            alt="Aditi Logo"
          >
          </b-img>
        </div>
        <div class="text justify-content-center mt-5">
          <p>
            Please enter verification code sent to your registered email and
            reset your password
          </p>
        </div>
        <b-form-group
          class="form-text mt-4"
          id="input-group-1"
          label="Password"
          label-for="password"
          description=""
        >
          <b-form-input
            class="shadow-none form-text"
            id="newPassword"
            type="text"
            placeholder="Code"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          class="form-text mt-4"
          id="input-group-1"
          label="Password"
          label-for="password"
          description=""
        >
          <b-form-input
            v-if="show_new_pw"
            class="shadow-none form-text"
            id="newPassword"
            v-model="newPassword"
            type="text"
            placeholder=""
            required
          >
          </b-form-input>
          <b-form-input
            v-else
            class="shadow-none form-text"
            id="newPassword"
            v-model="newPassword"
            type="password"
            placeholder="........."
            required
          >
          </b-form-input>
          <b-icon
            :icon="show_new_pw ? 'eye-fill' : 'eye-slash-fill'"
            @click="show_new_pw = !show_new_pw"
          >
          </b-icon>
        </b-form-group>

        <b-form-group
          class="form-text mt-4"
          id="input-group-1"
          label="Confirm Password"
          label-for="confirmPw"
          description=""
        >
          <b-form-input
            v-if="show_confirm_pw"
            class="shadow-none form-text"
            id="confirmPw"
            v-model="confirmPw"
            type="text"
            placeholder=""
            required
          >
          </b-form-input>
          <b-form-input
            v-else
            class="shadow-none form-text"
            id="confirmPw"
            v-model="confirmPw"
            type="password"
            placeholder="........."
            required
          >
          </b-form-input>
          <b-icon
            :icon="show_confirm_pw ? 'eye-fill' : 'eye-slash-fill'"
            @click="show_confirm_pw = !show_confirm_pw"
          ></b-icon>
        </b-form-group>
        <div class="mt-4 d-flex justify-content-end">
          <BtnSubmit title="Reset Password"></BtnSubmit>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import BtnSubmit from "../../components/buttons/BtnSubmit.vue";
export default {
  // middleware: ['auth'],
  components: { BtnSubmit },
  props: ["forgotPw"],
  data() {
    return {
      newPassword: "",
      confirmPw: "",
      show_confirm_pw: false,
      show_new_pw: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit("resetPw");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/pages/reset-password.scss";
</style>
