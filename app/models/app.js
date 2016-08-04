var assert = require('assert')

module.exports = function (options) {
  return {
    namespace: 'app',
    state: {
      i18n: options.i18n,
      language: 'en',
      languages: {
        'en': 'English',
        'es': 'Español'
      }
    },
    reducers: {
      language: function (data, state) {
        return { language: data }
      }
    },
    effects: {
      setLanguage: function (data, state, send, done) {
        document.title = require('../i18n/' + data + '.json').title
        send('app:language', data, done)
      }
    },
    subscriptions: [
      function (send, done) {
        send('app:setLanguage', options.defaultLanguage, done)
      }
    ]
  }
}
