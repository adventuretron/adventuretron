var html = require('choo/html')

module.exports = function (state, prev, send) {
  var challenges = state.challenges.items
  var lang = state.i18n.current
  var uiText = state.i18n.text[lang]
  var keys = Object.keys(challenges)

  function onclick (e) {
    e.preventDefault()
    e.stopPropagation()
    send('challenges:setChallenge', e.target.dataset.slug)
  }

  return html`<div class="challenges-menu">
    <h2 class="f4 ttu tracked fw4">${uiText.challenges}</h2>
    <ul class="list pl0">
      ${keys.map(function (key) {
        var item = challenges[key]
        var text = item.i18n[lang]

        var link = html`<a class="link pv0 hover-black focus-black gray" href="#" data-slug="${item.slug}" onclick=${onclick}>
          ${item.success ? html`☑` : html`☐`}
          ${text.title}
        </a>`

        return html`<li class="mb2">
          ${link}
        </li>`
      })}
    </ul>
  </div>`
}
