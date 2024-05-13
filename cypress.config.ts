import { defineConfig } from "cypress";


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //For Generating HTML Report
  e2e: {
    setupNodeEvents(on: any, config: any) {
      require('cypress-mochawesome-reporter/plugin')(on); //For HTML Report
    },
    baseUrl: "https://parabank.parasoft.com",
    "chromeWebSecurity": false
  },
});