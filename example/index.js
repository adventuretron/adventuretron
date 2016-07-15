var createApp = require('../app/index')
var app = createApp()

var tree = app.start()
document.body.appendChild(tree)
