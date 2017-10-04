var html = require('choo/html')

var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function main (state, prev, send) {
  return html`<div id="app" class="">
    <main role="main" class="app-main flex">
      ${sidebar(state, prev, send)}
      ${content(state, prev, send)}
    </main>
  </div>`
}
