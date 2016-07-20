var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var el = html`<div class="flex-auto p2">
    This is the content
  </div>`

  css(el, {
    color: '#333',
    height: '100%'
  })

  return el
}
