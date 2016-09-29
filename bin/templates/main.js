var path = require('path')
var adventuretron = require('adventuretron/main')

adventuretron({
  title: '{{title}}',
  index: 'file://' + path.join(__dirname, 'index.html')
})
