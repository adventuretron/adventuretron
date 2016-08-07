var path = require('path')
var createApp = require('../app/index')
var app = createApp({
  i18n: path.join(__dirname, 'i18n'),
  index: path.join(__dirname, 'index.html'),
  defaultLanguage: 'en',
  challenges: [
    require('./challenges/introduction'),
    require('./challenges/next-steps')
  ]
})

var tree = app.start({ href: false })
document.body.appendChild(tree)
