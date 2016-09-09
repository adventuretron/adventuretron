var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var challenges = state.challenges.list
  var lang = state.i18n.current
  var uiText = state.i18n.text[lang]

  var prefix = css`
    :host {}
  `

  return html`<div class="challenges-menu">
    <h2 class="f4 ttu tracked fw4">${uiText.challenges}</h2>
    <ul class="list pl0">
      ${challenges.map(function (item) {
        var text = item.i18n[lang]
        return html`<li class="mb2">
          <a class="link pv0 hover-black focus-black gray" href="/${text.slug}">${text.title}</a>
        </li>`
      })}
    </ul>
  </div>`
}
