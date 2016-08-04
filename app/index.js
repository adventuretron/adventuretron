var fs = require('fs')
var path = require('path')
var assert = require('assert')
var choo = require('choo')
var insertcss = require('insert-css')

module.exports = function createApp (options) {
  options = options || {}

  if (options.debug) {
    var logger = require('choo-log')()
    var hooks = {
      onAction: logger.onAction,
      onError: logger.onError,
      onStateChange: logger.onStateChange,
    }
  }

  var app = hooks ? choo(hooks) : choo()

  insertcss(fs.readFileSync(path.join(__dirname, 'basscss.min.css')))
  insertcss(fs.readFileSync(path.join(__dirname, 'style.css')))

  app.model(require('./models/app')(options))
  app.model(require('./models/location')(options))
  app.model(require('./models/challenges')(options))
  
  var welcome = require('./pages/welcome')
  var challenge = require('./pages/challenge')

  app.router(function routes (route) {
    return [
      route('/', welcome),
      route('/:challenge', challenge)
    ]
  })

  return app
}
