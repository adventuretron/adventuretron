var html = require('choo/html')
var css = require('sheetify')

var challenges = require('./challenges')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      width: 300px;
      background-color: #fafaf8;
      border-right: 1px solid #eee;
      top: 0;
      bottom: 0;
    }
  `

  return html`
    <div class="${prefix} app-sidebar ph4 pt3 fixed">
      ${challenges(state, prev, send)}
    </div>
  `
}
