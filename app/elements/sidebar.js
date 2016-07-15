var html = require('choo/html')
var css = require('sheetify')

var language = require('./select-language')
var challenges = require('./challenges')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      width: 300px;
      height: 100%;
    }
  `

  return html`
    <div class="${prefix} p2">
      ${language(state, prev, send)}
      ${challenges(state, prev, send)}
    </div>
  `
}
