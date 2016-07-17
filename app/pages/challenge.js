var html = require('choo/html')
var css = require('sheetify')

var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function main (state, prev, send) {
  var prefix = css`
    :host {
      background-color: #fff;
      height: 100%;
    }
  `

  var challengeTitle = state.params.challenge ? state.params.challenge.replace(/^\/|\/$/g, '') : ''
  var challenge = state.challenges.list.filter(function (item) {
    return item.title === challengeTitle
  })[0]

  return html`
    <div id="app" class="">
      <main role="main" class="${prefix} site-main flex">
        ${sidebar(state, prev, send)}
        <div class="${prefix} flex-auto p2">
        ${challenge.content(state, prev, send)}
        </div>
      </main>
    </div>
  `
}
