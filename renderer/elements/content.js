var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var i18n = require(`${state.app.i18n}/${state.app.language}.json`)
  var challenge = state.challenges.list[state.challenges.current]

  var content = html`<div></div>`
  content.innerHTML = challenge.content(state, prev, send)
  var el = html`<div class="app-content flex-auto p2 mt3">${content}</div>`

  css(el, {
    color: '#333',
    height: '100%'
  })

  return el
}
