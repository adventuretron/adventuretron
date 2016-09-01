var html = require('choo/html')
var css = require('sheetify')
var domify = require('../lib/domify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      color: #333;
      height: 100%;
    }
  `

  var challenge = state.challenges.list[state.challenges.current]

  return html`<div class="${prefix} app-content flex-auto pa2 mt3">
    ${domify(challenge.content(state, prev, send))}
  </div>`
}
