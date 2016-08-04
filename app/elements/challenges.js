var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var language = state.app.language
  var challenges = state.challenges.list
  var i18n = require('../i18n/' + language + '.json')

  var el = html`<div class="challenges-menu">
    <h2>${i18n.challenges}</h2>
    <ul class="list-reset">
      ${challenges.map(function (item) {
        return html`<li><a href="/${item.slug}">${item.title(language)}</a></li>`
      })}
    </ul>
  </div>`

  css(el, {})

  return el
}
