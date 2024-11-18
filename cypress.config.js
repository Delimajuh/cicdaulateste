const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportHeight: 720,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
    },
  },
});
