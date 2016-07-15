var path = require('path')
var adventuretron = require('../main.js')

var app = adventuretron({
  index: 'file://' + path.join(__dirname, 'index.html')
})
