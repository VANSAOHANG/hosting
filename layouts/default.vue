<template>
  <section class="default">
    <div class="d-flex">
      <div class="sidebar shadow-sm" :style="{ width: sidebarWidth }">
        <div class="brand pb-4 border-bottom">
          <b-img
            v-if="!collapsed"
            :src="require('@/assets/images/logo/logo1.png')"
            fluid
            alt="Aditi Logo"
            class="w-50 ml-3"
          >
          </b-img>
          <b-img
            v-else
            :src="require('@/assets/images/logo/aditi.png')"
            fluid
            alt="Aditi Logo"
            class="w-75"
            style="margin-left: 0.5rem"
          >
          </b-img>
        </div>
        <i class="bi bi-1-circle-fill"></i>
        <nav>
          <b-nav vertical class="mt-3">
            <NuxtLink :to="nav.link" v-for="(nav, i) in navigators" :key="i">
              <b-icon @click="collapsed = false" :icon="nav.icon"></b-icon>
              <span v-if="!collapsed" class="my-2 ml-2">{{ nav.title }}</span>
            </NuxtLink>
          </b-nav>
        </nav>
      </div>

      <div class="sidebar-right" :style="{ 'margin-left': sidebarWidth }">
        <header
          class="header shadow-sm p-2 mb-3 d-flex justify-content-between"
        >
          <div
            class="navbar-minimize d-flex justify-content-center align-items-center rounded shadow-sm"
            role="button"
            @click="toggleSidebar"
          >
            <b-icon-chevron-right v-if="collapsed"></b-icon-chevron-right>
            <b-icon-chevron-left v-else></b-icon-chevron-left>
          </div>
          <div class="right-menu d-flex">
            <div class="notification mr-4">
              <b-icon-bell></b-icon-bell>
              <b-badge variant="light">4</b-badge>
            </div>
            <div v-b-modal.modal-1 class="profile mr-3">
              <b-img
                src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                fluid
                alt="Aditi Logo"
              >
              </b-img>
              <!-- <h4 class="username mt-2 mx-2">Oudom</h4> -->
            </div>
            <div v-if="$auth.loggedIn" class="user-profile">
              <b-modal id="modal-1" hide-footer hide-header>
                <b-card
                  :title="$auth.user.name"
                  img-src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="text-center border-0"
                >
                  <b-card-text class="mb-4 pb-2">
                    {{ $auth.user.email }}
                  </b-card-text>
                  <form @submit.prevent="logout">
                    <BtnSubmit title="Sign Out" aRight="True"></BtnSubmit>
                  </form>
                </b-card>
              </b-modal>
            </div>
          </div>
        </header>

        <div style="width: 94%; margin: auto">
          <Nuxt />
        </div>
        <footer class="d-flex justify-content-between p-2 mt-4 shadow-sm">
          <p class="copyright pull-right mt-3">
            ©2022 Aditi. All Rights Reserved.
          </p>
          <p class="copyright pull-right mt-3">
            Developed by <strong>Aditi</strong>
          </p>
        </footer>
      </div>
    </div>
  </section>
</template>
<script>
import BtnSubmit from "../components/buttons/BtnSubmit.vue";
export default {
  name: "DefaultLayout",
  components: { BtnSubmit },
  data() {
    return {
      collapsed: false,
      SIDEBAR_WIDTH: 14,
      SIDEBAR_WIDTH_COLLAPSED: 3.5,
      navigators: [
        { link: "/dashboard", title: "dashboard", icon: "house-fill" },
        { link: "/profile", title: "profile", icon: "person-bounding-box" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    logout() {
      this.$auth.logout();
    },
  },
  computed: {
    sidebarWidth() {
      return `${
        this.collapsed ? this.SIDEBAR_WIDTH_COLLAPSED : this.SIDEBAR_WIDTH
      }rem`;
    },
  },
};
</script>
<style lang="scss">
@import "~assets/sass/layouts/default.scss";
</style>
