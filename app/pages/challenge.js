var html = require('choo/html')
var css = require('dom-css')

var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function main (state, prev, send) {
  var challengeTitle = state.params.challenge ? state.params.challenge.replace(/^\/|\/$/g, '') : ''
  var challenge = state.challenges.list.filter(function (item) {
    return item.title === challengeTitle
  })[0]

  var el = html`
    <div id="app" class="">
      <main role="main" class="site-main flex">
        ${sidebar(state, prev, send)}
        <div class="flex-auto p2">
        ${challenge.content(state, prev, send)}
        </div>
      </main>
    </div>
  `

  css(el, {
    backgroundColor: '#fff',
    height: '100%'
  })

  return el
}
