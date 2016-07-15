var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      border: 1px solid #ccc;
      width: 100%;
      height: 30px;
    }
  `

  // TODO: populate from state
  // TODO: send action onchange
  return html`
    <select class="${prefix} select-language btn-outline fit">
      <option value="">English</option>
    </select>
  `
}
