module.exports = {
  projectId: '6imkw3',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://52.233.158.155:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}
