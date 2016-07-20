var fs = require('fs')
var path = require('path')
var assert = require('assert')
var choo = require('choo')
var insertcss = require('insert-css')

module.exports = function createApp (options) {
  options = options || {}
  assert((options.challenges || options.challenges.length), 'options.challenges must be an array of objects with a title property and challenge, success, & verify methods')

  if (options.debug) {
    const chooLog = require('choo-log')
    const logger = chooLog()
    var hooks = {
      onAction: logger.onAction(),
      onError: logger.onError(),
      onStateChange: logger.onStateChange(),
    }
  }

  const app = hooks ? choo(hooks) : choo()

  insertcss(fs.readFileSync(path.join(__dirname, 'basscss.min.css')))
  insertcss(fs.readFileSync(path.join(__dirname, 'style.css')))

  var welcome = require('./pages/welcome')
  var challenge = require('./pages/challenge')

  app.model({
    namespace: 'location',
    state: {
      pathname: '/'
    },
    reducers: {
      pathname: function (data, state) {
        return { pathname: data.pathname }
      }
    },
    subscriptions: [
      function catchLinks (send, done) {
        window.onclick = function (e) {
          var node = (function traverse (node) {
            if (!node) return
            if (node.localName !== 'a') return traverse(node.parentNode)
            if (node.href === undefined) return traverse(node.parentNode)
            if (window.location.host !== node.host) return traverse(node.parentNode)
            return node
          })(e.target)

          if (!node) return
          e.preventDefault()
          var href = node.href.replace('file://', '')

          send('location:pathname', { pathname: href.replace(/#$/, '') }, done)
        }
      }
    ]
  })

  app.model({
    namespace: 'app',
    state: {
      title: 'adventuretron',
      description: 'create nodeschool workshops with electron'
    },
    reducers: {},
    effects: {}
  })

  app.model({
    namespace: 'challenges',
    state: {
      list: options.challenges
    },
    reducers: {},
    effects: {}
  })

  app.router(function routes (route) {
    return [
      route('/', welcome),
      route('/:challenge', challenge)
    ]
  })

  return app
}
