const { defineConfig } = require("cypress");
 

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalSessionAndOrigin: true,
    experimentalOriginDependencies: true,
    testIsolation: false
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
});


