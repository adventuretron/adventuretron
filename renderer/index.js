var fs = require('fs')
var path = require('path')
var assert = require('assert')
var choo = require('choo')
var bulk = require('bulk-require')
var css = require('sheetify')
var xtend = require('xtend')

var readChallenge = require('./lib/read-challenge')
var createDB = require('./lib/db')
var slugify = require('./lib/slugify')

var main = require('./pages/main')
var challenge = require('./pages/challenge')
var page = require('./pages/page')

module.exports = function createApp (options) {
  options = options || {}
  options.slug = slugify(options.name)

  var app = choo()
  options.debug = true
  if (options.debug) app.use(require('choo-log')())

  var challenges = {}
  fs.readdirSync(options.challenges).map(function (challengeDir) {
    if (challengeDir !== '.DS_Store') {
      var challenge = readChallenge(options.challenges, challengeDir)
      challenges[challenge.slug] = challenge
    }
  })

  var db = createDB({
    name: options.slug
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

  css('tachyons')
  css('highlight.js/styles/tomorrow.css')
  css('./style.css', { global: true })

  return {
    start: function (id, opts) {
      if (typeof id === 'object') {
        opts = id
        id = null
      }

      var prevState = db.get('state')

      app.use({
        wrapInitialState: function (state) {
          if (prevState) {
            Object.keys(challenges).forEach(function (key) {
              prevState.challenges.items[key].content = challenges[key].content
            })
            return xtend(state, prevState)
          } else {
            return state
          }
        },
        onStateChange: function (data, state, prev, caller, createSend) {
          db.put('state', state)
        }
      })

      opts = opts || {}
      opts.href = opts.href || false
      const tree = app.start(opts)
      document.body.appendChild(tree)
    })
  }
}


