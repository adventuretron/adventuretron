var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var el = html`<header class="site-header">
    <h1 class="site-title">${state.app.title}</h1>
  </header>`

  css(el, {
    borderBottom: `1px solid #ccc`
  })

  return el
}
