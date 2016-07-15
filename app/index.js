var choo = require('choo')

module.exports = function createApp (options) {
  options = options || {}

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

  var welcome = require('./pages/welcome')
  var challenge = require('./pages/challenge')

  app.model({
    namespace: 'app',
    state: {
      title: 'adventuretron',
      description: 'create nodeschool workshops with electron'
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
