module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/_mixins.scss";
        `
      }
    }
  }
};
