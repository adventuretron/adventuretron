var html = require('choo/html')
var css = require('sheetify')

var challenges = require('./challenges')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      width: 300px;
      height: 100%;
    }
  `

  return html`
    <div class="${prefix} app-sidebar pa2 mt5">
      ${challenges(state, prev, send)}
    </div>
  `
}
