module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "apcom_program" : "/",
  publicPath: "/",
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/_mixins.scss";
          @import "~@/assets/scss/_transitions.scss";
        `
      }
    }
  }
};
