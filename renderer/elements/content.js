var html = require('bel')

module.exports = function (state, prev, send) {
  var challenge = state.challenges.items[state.challenges.current]

  var params = {
    i18n: state.i18n,
    challenge: challenge,
    challenges: state.challenges,
    language: state.i18n.current
  }

  return html`<div class="app-content flex-auto pa2 pt3 mt3 h-100 dark-gray">
    ${challenge.content(params, send)}
  </div>`
}
