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
  css('highlight.js/styles/tomorrow.css')
  css('./style.css', { global: true })

  var app = choo()
  options.debug = true
  if (options.debug) app.use(require('choo-log')())

  var challenges = {}
  fs.readdirSync(options.challenges).map(function (challengeDir) {
    var challenge = readChallenge(options.challenges, challengeDir)
    challenges[challenge.slug] = challenge
  })

  options.challenges = challenges
  options.i18n = bulk(options.i18n, '*')
  app.model(require('./models/location'))
  app.model(require('./models/challenges')(options))
  app.model(require('./models/app')(options))
  app.model(require('./models/i18n')(options))

  app.router(function routes (route) {
    return [
      route('/', challenge),
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
      var tree = app.start({ href: false })
      document.body.appendChild(tree)
    }
  }
}
