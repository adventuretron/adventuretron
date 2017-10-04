var path = require('path')
var createApp = require('adventuretron/renderer')

var app = createApp({
  name: '{{title}}',
  defaultLanguage: 'en',
  languages: {
    'en': 'English'
  },
  i18n: path.join(__dirname, 'i18n'),
  challenges: path.join(__dirname, 'challenges')
})

app.start()
