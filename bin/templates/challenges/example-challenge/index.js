var html = require('adventuretron/html')
var description = require('adventuretron/description')

var i18n = require('./i18n')

module.exports = {
  i18n: i18n,
  content: function (params, send) {
    var lang = params.language
    var challenge = params.challenge
    var uiText = i18n[lang]

    return html`<div>
      ${description(challenge, lang)}
    </div>`
  }
}
