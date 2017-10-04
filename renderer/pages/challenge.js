var html = require('choo/html')

var sidebar = require('../elements/sidebar')

module.exports = function main (state, prev, send) {
  var slug = state.challenges.current
  var challenge = state.challenges.items[slug]

  var params = {
    i18n: state.i18n,
    challenge: challenge,
    challenges: state.challenges,
    language: state.i18n.current
  }

  return html`<div id="app">
    <main role="main" class="app-main flex">
      ${sidebar(state, prev, send)}
      <div class="app-content ph4 mb5">
        <div class="app-content-wrapper pt2">
          ${challenge.content(params, send)}
        </div>
      </div>
    </main>
  </div>`
}
