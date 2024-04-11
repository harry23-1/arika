const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://esg.idea2mvp.in/',
    setupNodeEvents(on, config) {
    },
  },
});
