var html = require('choo/html')
var css = require('sheetify')

var language = require('./select-language')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      borderBottom: 1px solid #ccc;
      width: 100%;
    }
    
    h1 {
      font-size: 20px;
      font-weight: 300;
    }
  `

  var text = state.i18n.text[state.i18n.current]

  return html`<header class="${prefix} app-header pa1 absolute">
    <h1>${text.title}</h1>
    ${language(state, prev, send)}
  </header>`
}
