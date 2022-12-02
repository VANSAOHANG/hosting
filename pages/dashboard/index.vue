<template>
  <section class="dashboard">
    <b-card tag="article" class="leaves border-0 mt-4">
      <b-card-title>
        <b-icon-calendar-plus-fill></b-icon-calendar-plus-fill>
        <span>Leave Balance</span>
      </b-card-title>
      <div class="row">
        <div
          v-for="n in 4"
          :key="n"
          class="col-md-3 col-sm-6 leave d-flex align-items-center px-4"
        >
          <div>
            <div class="number">
              <h1 class="d-inline">130</h1>
              <span>/12h</span>
            </div>
            <p class="title">Personal</p>
          </div>
        </div>
      </div>
    </b-card>
    <div class="ot-control mt-4">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <b-card tag="article" class="border-0 shadow-sm mb-4">
            <b-card-title>
              <b-icon-clock-history></b-icon-clock-history>
              OT Hours
            </b-card-title>
            <b-card-text> $ {{ otHours }}/Hrs </b-card-text>
          </b-card>
        </div>
        <div class="col-md-4 col-sm-6">
          <b-card tag="article" class="border-0 shadow-lg">
            <b-card-title>
              <b-icon-currency-dollar></b-icon-currency-dollar>
              OT Amount
            </b-card-title>
            <b-card-text> $ {{ otAmount }} </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ["auth"],

  data() {
    return {
      otHours: "2.50",
      otAmount: "500.00",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/pages/dashboard.scss";
</style>
