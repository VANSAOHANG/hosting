<template>
  <div class="verifyPw">
    <div
      class="form-container m-auto shadow-sm p-4 rounded"
      style="width: 40rem"
    >
      <b-form @submit="onSubmit">
        <div class="w-25 mx-auto my-3">
          <b-img
            :src="require('@/assets/images/logo/logo1.png')"
            fluid
            alt="Aditi Logo"
          >
          </b-img>
        </div>
        <div class="row">
          <b-form-group
            class="col-lg-6 form-text mt-4"
            label="First Name"
            description=""
          >
            <b-form-input
              class="shadow-none form-text"
              v-model="generalInfos.first_name"
              type="text"
              placeholder="First name"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="col-lg-6 form-text mt-4"
            label="Last Name"
            description=""
          >
            <b-form-input
              class="shadow-none form-text"
              v-model="generalInfos.last_name"
              type="text"
              placeholder="Last name"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="col-lg-6 form-text mt-4"
            label="Gender"
            description=""
          >
            <b-form-input
              class="shadow-none form-text"
              v-model="generalInfos.gender"
              type="text"
              placeholder="Gender"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="col-lg-6 form-text mt-4"
            label="dateOfBirth"
            Description=""
          >
            <b-form-input
              class="shadow-none form-text"
              v-model="generalInfos.date_of_birth"
              type="text"
              placeholder="Date of birth"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="col-lg-6 form-text mt-4"
            label="Phone"
            description=""
          >
            <b-form-input
              class="shadow-none form-text"
              v-model="generalInfos.phone"
              type="text"
              placeholder="Phone"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="col-lg-6 form-text mt-4"
            label="Email"
            description=""
          >
            <b-form-input
              class="shadow-none form-text"
              v-model="generalInfos.email"
              type="email"
              placeholder="Email"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="col-lg-12 form-text mt-4"
            label="Address"
            description=""
          >
            <b-form-textarea
              id="textarea-default"
              class="shadow-none form-text"
              v-model="generalInfos.address"
              placeholder="Default textarea"
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div class="mt-4 d-flex justify-content-end">
          <BtnSubmit title="Save Change"></BtnSubmit>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import BtnSubmit from "../../../components/buttons/BtnSubmit.vue";
export default {
  components: { BtnSubmit },
  data() {
    return {
      generalInfos: {
        first_name: "Virak",
        last_name: "Oudom",
        gender: "Male",
        date_of_birth: "09/09/1999",
        phone: "+855 86 55 70 43",
        email: "Virakoudom@camsolution.biz",
        address: "Camsolution technology, HV4Q+679, Phnom Penh",
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.generalInfos);
      this.$router.push("/profile");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/pages/reset-password.scss";
</style>
