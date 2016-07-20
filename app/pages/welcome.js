var html = require('choo/html')
var css = require('dom-css')

var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function main (state, prev, send) {
  var main = html`<main role="main" class="site-main flex">
    ${sidebar(state, prev, send)}
    ${content(state, prev, send)}
  </main>`

  css(main, {
    height: '100%'
  })

  var el = html`<div id="app" class="">${main}</div>`

  css(el, {
    backgroundColor: '#fff',
    height: '100%'
  })

  return el
}
