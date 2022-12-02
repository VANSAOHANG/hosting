import head from "./config/head";
import server from "./config/server";

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export default {
  /* SPA OR SSR */
  ssr: true,

  /* TARGET */
  target: "static",

  /* GLOBAL PAGE HEADERS */
  head: head,

  /* GLOBAL CSS */
  css: ["@/assets/sass/main.scss"],

  /* PLUGINS */
  plugins: ["@/plugins/api.js"],

  /* AUTO IMPORT COMPONENT */
  components: true,

  /* BUILD MODOULES */
  buildModules: ["@nuxtjs/pwa"],

  /* BUILD */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.scss$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },

  /* MODOULES */
  modules: [
    // "@nuxtjs/style-resources",
    "vue-social-sharing/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    ["@nuxtjs/dotenv", { filename: `.env.${process.env.NODE_ENV}` }],
    "bootstrap-vue/nuxt",
    "cookie-universal-nuxt",
  ],

  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: false,
    },
    strategies: {
      local: false,
      cookie: {
        token: {
          property: "access_token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: false,
          autoFetch: false,
        },
        endpoints: {
          login: {
            url: "http://api.hr.camsolutiondemo.com/api/v1/auth/login",
            method: "post",
          },
          logout: {
            url: "http://api.hr.camsolutiondemo.com/api/v1/auth/logout",
            method: "post",
          },
          user: {
            url: "http://api.hr.camsolutiondemo.com/api/v1/auth/user",
            method: "get",
          },
        },
      },
    },
  },

  bootstrapVue: {
    icons: true,
  },

  /* AXIOS */
  axios: {
    baseURL: process.env.BASE_URL,
  },

  /* PUBLIC RUNTIME */
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  /* PRIVATE RUNTIME */
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // styleResources: {
  //   scss: ["./assets/scss/*.scss"],
  // },

  pwa: {
    workbox: false,
  },

  /* SERVER */
  server: process.env.NODE_ENV == "development" ? server : {},
};
