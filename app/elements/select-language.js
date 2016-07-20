var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  // TODO: populate from state
  // TODO: send action onchange
  var el = html`
    <select class="select-language btn-outline fit">
      <option value="">English</option>
    </select>
  `

  css(el, {
    border: '1px solid #ccc',
    width: '100%',
    height: '30px'
  })

  return el
}
