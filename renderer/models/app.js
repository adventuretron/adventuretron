var assert = require('assert')

module.exports = function (options) {
  return {
    namespace: 'app',
    state: {},
    reducers: {},
    effects: {
      redirect: function (data, state, send, done) {
        send('location:pathname', data, done)
        window.history.pushState({}, null, data)
      }
    },
    subscriptions: []
  }
}
