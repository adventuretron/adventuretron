var assert = require('assert')

module.exports = function (options) {
  return {
    namespace: 'i18n',
    state: {
      current: options.defaultLanguage || 'en',
      languages: options.languages || { en: 'English' },
      text: options.i18n
    },
    reducers: {
      language: function (data, state) {
        return { language: data }
      }
    },
    effects: {
      setLanguage: function (data, state, send, done) {
        document.title = require(state.i18n + '/' + data + '.json').title
        send('app:language', data, done)
      }
    },
    subscriptions: []
  }
}
