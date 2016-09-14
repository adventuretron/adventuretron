var html = require('choo/html')
var css = require('sheetify')

var sidebar = require('../elements/sidebar')

module.exports = function main (state, prev, send) {
  var prefix = css`
    :host {
      backgroundColor: #fff;
      height: 100%;
    }

    .app-content {
      margin-left:300px;
      width: calc(100% - 300px);
    }

    .app-content-wrapper {
      margin: 0px auto;
      width: 100%;
      max-width: 700px;
    }
  `

  var slug = state.challenges.current
  var challenge = state.challenges.items[slug]

  var params = {
    i18n: state.i18n,
    challenge: challenge,
    challenges: state.challenges,
    language: state.i18n.current
  }

  return html`<div id="app" class="${prefix}">
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
