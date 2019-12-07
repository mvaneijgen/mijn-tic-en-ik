const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/mijn-tic-en-ik/",
      },
    }
    : {};

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "mijnticenik",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "mijnticenik" },
      {
        property: "og:description",
        content: "Nuxt.js project",
      },
      { property: "og:url", content: "" },
      {
        property: "og:image",
        content: "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "",
      },
    ],
  },
  generate: {
    dir: "docs",
    // router: {
    //   base: '/wish-list/',
    // },
  },
  modules: [
    "@nuxtjs/axios",
    // "@nuxtjs/pwa"
  ],
  manifest: {
    name: "mijnticenik | Mitchel van Eijgen <mvaneijgen@gmail.com>",
    short_name: "mijnticenik",
    lang: "en",
    icons: [
      {
        src: "android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    theme_color: "#0ba",
    background_color: "#0ba",
    display: "standalone",
  },
  // plugins: ["~/plugins/firebase.js"],
  // workbox: {
  //   runtimeCaching: [
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: "https://mvaneijgen.nl/wish-list/.*",
  //       // Defaults to `networkFirst` if omitted
  //       handler: "cacheFirst",
  //       // Defaults to `GET` if omitted
  //       method: "GET",
  //     },
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: "https://i.imgur.com/.*",
  //       // Defaults to `networkFirst` if omitted
  //       handler: "cacheFirst",
  //       // Defaults to `GET` if omitted
  //       method: "GET",
  //     },
  //   ],
  // },
  axios: {
    // proxyHeaders: false
  },
  ...routerBase,
  css: ["@/assets/css/main.scss"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#0ba" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
