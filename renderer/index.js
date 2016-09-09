var fs = require('fs')
var path = require('path')
var assert = require('assert')
var choo = require('choo')
var css = require('sheetify')
var bulk = require('bulk-require')

var readChallenge = require('./lib/read-challenge')

var main = require('./pages/main')
var challenge = require('./pages/challenge')
var page = require('./pages/page')

module.exports = function createApp (options) {
  options = options || {}

  css('tachyons')
  css('./style.css', { global: true })

  var app = choo()
  if (options.debug) choo.use(require('choo-log')())

  options.challenges = fs.readdirSync(options.challenges).map(function (item) {
    return readChallenge(options.challenges, item)
  })

  options.i18n = bulk(options.i18n, '*')
  app.model(require('./models/challenges')(options))
  app.model(require('./models/app')(options))
  app.model(require('./models/i18n')(options))
  app.model(require('choo-location-electron'))

  app.router(function routes (route) {
    return [
      route('/', challenge),
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
