// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

//     },

//   },
//   env:{
//     baseUrl:"http://parabank.parasoft.com/parabank/index.html",
//     "chromeWebSecurity":false

//   }
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //For Generating HTML Report
  e2e: {
    setupNodeEvents(on:any, config:any) {
      require('cypress-mochawesome-reporter/plugin')(on); //For HTML Report
    },
  },
});