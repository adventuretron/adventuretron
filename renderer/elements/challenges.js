var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var challenges = state.challenges.list
  var i18n = state.i18n
  var language = i18n.current

  return html`<div class="challenges-menu">
    <h2>${i18n.text.challenges}</h2>
    <ul class="list-reset">
      ${challenges.map(function (item) {
        var text = item.i18n[language]
        return html`<li><a href="/${text.slug}">${text.title}</a></li>`
      })}
    </ul>
  </div>`
}
