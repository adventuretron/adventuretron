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
        return { current: data }
      }
    },
    effects: {
      setLanguage: function (data, state, send, done) {
        document.title = state.text[data].title
        send('i18n:language', data, done)
      }
    },
    subscriptions: []
  }
}
