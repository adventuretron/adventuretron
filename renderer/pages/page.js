var html = require('choo/html')
var css = require('sheetify')

var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function main (state, prev, send) {
  var prefix = css`
    :host {
      backgroundColor: #fff;
      height: 100%;
    }
    
    main {
      height: 100%;
    }
  `

  return html`<div id="app" class="${prefix}">
    <main role="main" class="app-main flex">
      ${sidebar(state, prev, send)}
      ${content(state, prev, send)}
    </main>
  </div>`
}
