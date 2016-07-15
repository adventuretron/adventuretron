var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      color: #333;
      height: 100%;
    }
  `

  return html`
  <div class="${prefix} flex-auto p2">
  This is the content
  </div>
  `
}
