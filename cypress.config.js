const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  numTestsKeptInMemory: 0,
  video: false,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {},
    
  },
})
