var fs = require('fs')
var path = require('path')
var assert = require('assert')
var choo = require('choo')
var insertcss = require('insert-css')

var readChallenge = require('./lib/read-challenge')

var welcome = require('./pages/welcome')
var challenge = require('./pages/challenge')
var page = require('./pages/page')

module.exports = function createApp (options) {
  options = options || {}

  insertcss(fs.readFileSync(path.join(__dirname, 'basscss.min.css')))
  insertcss(fs.readFileSync(path.join(__dirname, 'style.css')))

  if (options.debug) {
    var logger = require('choo-log')()
    var hooks = {
      onAction: logger.onAction,
      onError: logger.onError,
      onStateChange: logger.onStateChange,
    }
  }

  var app = hooks ? choo(hooks) : choo()
  app.model(require('./models/app')(options))
  app.model(require('./models/location')(options))
  app.model(require('./models/challenges')(options))

  app.router(function routes (route) {
    return [
      route('/', welcome),
      route('/:challenge', challenge),
      route('/page/:page', page)
    ]
  })

  return {
    start: function (id, opts) {
      if (typeof id === 'object') {
        opts = id
        id = null
      }
      opts = opts || {}
      opts.href = opts.href || false
      var tree = app.start(id, opts)
      document.body.appendChild(tree)
    }
  }
}
