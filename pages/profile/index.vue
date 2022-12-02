<template>
  <section class="profile-container row">
    <div class="container">
      <div class="row rounded">
        <div class="col-lg-4">
          <div class="profile">
            <b-card
              title="Virak Oudom"
              img-src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
              img-alt="Image"
              img-top
              tag="article"
              class="text-center border-0 shadow-sm p-3"
            >
              <b-card-text class="mb-4 pb-2"> UX/UI Designer </b-card-text>
              <ButtonMain
                :link="{ name: 'profile-edit' }"
                title="Edit Profile"
                aRight="True"
              ></ButtonMain>
            </b-card>
          </div>
          <b-card tag="article" class="border-0 mt-4">
            <b-card-title>
              <b-icon-calendar-plus-fill></b-icon-calendar-plus-fill>
              <span>Emergency Contact</span>
            </b-card-title>
            <div
              v-for="(info, i) in emergencyInfos"
              :key="i"
              class="info-control py-2"
            >
              <span class="info text-capitalize">{{ info.info }}</span>
              <p class="title font-weight-bold mb-0 border-bottom py-1">
                {{ info.title }}
              </p>
            </div>
          </b-card>
          <b-card tag="article" class="border-0 mt-4">
            <b-card-title>
              <b-icon-briefcase-fill></b-icon-briefcase-fill>
              <span>Bank Informations</span>
            </b-card-title>
            <div
              v-for="(info, i) in bankInfos"
              :key="i"
              class="info-control py-2"
            >
              <span class="info text-capitalize">{{ info.info }}</span>
              <p class="title font-weight-bold mb-0 border-bottom py-1">
                {{ info.title }}
              </p>
            </div>
          </b-card>
        </div>
        <div class="col-lg-8">
          <div class="information">
            <b-card title="" tag="article" class="border-0">
              <b-card-title>
                <b-icon-file-earmark-person></b-icon-file-earmark-person>
                <span>General Informaion</span>
              </b-card-title>
              <div class="row">
                <div
                  v-for="(info, i) in generalInfos"
                  :key="i"
                  class="info-control py-2 col-md-6"
                >
                  <span class="info text-capitalize">{{ info.info }}</span>
                  <p class="title font-weight-bold mb-0 border-bottom py-1">
                    {{ info.title }}
                  </p>
                </div>
              </div>
            </b-card>
            <b-card tag="article" class="border-0 mt-4">
              <b-card-title>
                <b-icon-building></b-icon-building>
                <span>Job Details</span>
              </b-card-title>
              <div class="row">
                <div
                  v-for="(info, i) in workInfos"
                  :key="i"
                  class="info-control py-2 col-md-6"
                >
                  <span class="info text-capitalize">{{ info.info }}</span>
                  <p class="title font-weight-bold mb-0 border-bottom py-1">
                    {{ info.title }}
                  </p>
                </div>
              </div>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonMain from "../../components/buttons/ButtonMain.vue";
export default {
  middleware: ["auth"],
  components: { ButtonMain },
  data() {
    return {
      generalInfos: [
        { info: "first name", title: "Virak" },
        { info: "last name", title: "Oudom" },
        { info: "gender", title: "Male" },
        { info: "date of birth", title: "09/09/1999" },
        { info: "phone number", title: "+855 86 55 70 43" },
        { info: "email", title: "Virakoudom@camsolution.biz" },
        {
          info: "address",
          title: "Camsolution technology, HV4Q+679, Phnom Penh",
        },
      ],
      workInfos: [
        { info: "Job Type", title: "Full time" },
        { info: "Department", title: "Software Development" },
        { info: "Positon", title: "UX/UI Designer" },
        { info: "Salary", title: "$ 400.00" },
        { info: "Supervisor", title: "Oh Oh" },
        { info: "Remark", title: "What you want to remark !" },
      ],
      emergencyInfos: [
        { info: "Contact Name", title: "Pheakdey Kong" },
        { info: "Emergency Number", title: "+855 86 55 70 43" },
      ],
      bankInfos: [
        { info: "Bank Name", title: "ABA" },
        { info: "Account Name", title: "Virak Oudom" },
        { info: "Account Number", title: "0027 24 091" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/pages/profile.scss";
</style>
