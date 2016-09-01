var html = require('choo/html')

module.exports = function domify (content) {
  var div = html`<div></div>`
  div.innerHTML = content
  return div.children[0]
}
