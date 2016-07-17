var createApp = require('../app/index')
var app = createApp({
  challenges: [
    require('./challenges/introduction')
  ]
})

var tree = app.start({ href: false })
document.body.appendChild(tree)
