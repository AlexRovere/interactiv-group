module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:5000',
  },
}
