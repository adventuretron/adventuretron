var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var challenges = state.challenges.items
  var lang = state.i18n.current
  var uiText = state.i18n.text[lang]

  var prefix = css`
    :host {}
    
    button {
      border: 0px;
      background-color: none;
      padding: 0;
    }
  `

  function onclick (e) {
    e.preventDefault()
    e.stopPropagation()
    send('challenges:setChallenge', e.target.dataset.slug)
  }
  var keys = Object.keys(challenges)
  return html`<div class="challenges-menu">
    <h2 class="f4 ttu tracked fw4">${uiText.challenges}</h2>
    <ul class="list pl0">
      ${keys.map(function (key) {
        var item = challenges[key]
        var text = item.i18n[lang]
        return html`<li class="mb2">
          <a class="link pv0 hover-black focus-black gray" href="#" data-slug="${item.slug}" onclick=${onclick}>${text.title}</a>
        </li>`
      })}
    </ul>
  </div>`
}
