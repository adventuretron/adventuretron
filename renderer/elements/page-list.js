var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var pages = state.app.pages
  var keys = Object.keys(pages)

  var el = html`<ul class="select-language btn-outline fit" onchange=${onchange}>
    ${keys.map(function (key) {
      var page = pages[key]
      return html`<li>${page.title}</li>`
    })}
  </ul>`

  css(el, {})
  return el
}
