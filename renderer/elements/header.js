var html = require('choo/html')
var css = require('dom-css')

var language = require('./select-language')

module.exports = function (state, prev, send) {
  var el = html`<header class="app-header p1 absolute">
    <h1 class="site-title">${state.app.title}</h1>
    ${language(state, prev, send)}
  </header>`

  css(el, {
    borderBottom: `1px solid #ccc`,
    width: '100%'
  })

  return el
}
