var html = require('choo/html')

module.exports = function (state, prev, send) {
  var pages = state.app.pages
  var keys = Object.keys(pages)

  return html`<ul class="select-language btn-outline fit" onchange=${onchange}>
    ${keys.map(function (key) {
      var page = pages[key]
      return html`<li>${page.title}</li>`
    })}
  </ul>`
}
