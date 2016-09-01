var path = require('path')
var createApp = require('../renderer')

var app = createApp({
  defaultLanguage: 'en',
  languages: {
    'en': 'English',
    'es': 'Español'
  },
  i18n: path.join(__dirname, 'i18n'),
  welcome: path.join(__dirname, 'welcome.md'),
  challenges: [
    require('./challenges/introduction'),
    require('./challenges/next-steps')
  ]
})

app.start()
