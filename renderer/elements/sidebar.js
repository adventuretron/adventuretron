var html = require('choo/html')
var css = require('dom-css')

var challenges = require('./challenges')

module.exports = function (state, prev, send) {
  var el =  html`
    <div class="app-sidebar p2 mt3">
      ${challenges(state, prev, send)}
    </div>
  `

  css(el, {
    width: '300px',
    height: '100%'
  })

  return el
}
