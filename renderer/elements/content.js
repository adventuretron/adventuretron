var html = require('choo/html')
var css = require('sheetify')
var domify = require('domify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      color: #333;
      height: 100%;
    }
  `

  var challenge = state.challenges.items[state.challenges.current]

  var params = {
    i18n: state.i18n,
    challenge: challenge,
    challenges: state.challenges,
    language: state.i18n.current
  }

  return html`<div class="${prefix} app-content flex-auto pa2 pt3 mt3">
    ${challenge.content(params, send)}
  </div>`
}
