var xtend = require('xtend')
var html = require('choo/html')
var createSandbox = require('interactive-sandbox')

module.exports = function createCodeInput (params) {
  params = params || {}
  var headerText = params.headerText
  var buttonText = params.buttonText || 'Check your answer'
  var descriptionText = params.descriptionText
  var value = params.value || ''

  var opts = xtend(params.editor, {
    onChange: function (code) {
      value = code
    }
  })

  var sandbox = createSandbox(value, opts)

  function onclick (e) {
    e.preventDefault()
    params.verify(value)
  }

  return html`<div class="challenge-code-input">
    <h2>${headerText}</h2>
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    ${sandbox.render()}
    <button onclick=${onclick}>${buttonText}</button>
  </div>`
}
