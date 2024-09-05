const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 100000000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
