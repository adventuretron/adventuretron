var html = require('choo/html')
var css = require('dom-css')

var language = require('./select-language')
var challenges = require('./challenges')

module.exports = function (state, prev, send) {
  var el =  html`
    <div class="p2">
      ${language(state, prev, send)}
      ${challenges(state, prev, send)}
    </div>
  `

  css(el, {
    width: '300px',
    height: '100%'
  })

  return el
}
