var path = require('path')
var adventuretron = require('adventuretron/main')

var app = adventuretron({
  title: '{{title}}',
  index: 'file://' + path.join(__dirname, 'index.html')
})
