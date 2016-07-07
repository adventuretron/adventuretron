var html = require('choo/view')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      border-bottom: 1px solid #ccc;
    }
  `

  return html`
    <header class="${prefix} site-header">
      <h1 class="site-title">${state.app.title}</h1>
    </header>
  `
}
