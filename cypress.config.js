const { defineConfig } = require("cypress");




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videoCompression: false,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    baseUrl:'https://jobs.lever.co/iovlabs/b50e26fc-7673-4b70-a093-fec793a7019a/apply'
  },
});
