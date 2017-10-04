var assert = require('assert')
var xtend = require('xtend')
var html = require('choo/html')
var createSandbox = require('interactive-sandbox')

module.exports = function verifyCode (options) {
  assert.ok(options, 'adventuretron/verify-code: options object is required')
  assert.ok(options.headerText, 'adventuretron/verify-code: options.headerText is required')
  assert.ok(options.buttonText, 'adventuretron/verify-code: options.buttonText is required')
  assert.ok(options.verify, 'adventuretron/verify-code: options.verify is required')

  var headerText = options.headerText
  var buttonText = options.buttonText
  var descriptionText = options.descriptionText
  var value = options.value || ''

  var opts = xtend(options.editor, {
    onChange: function (code) {
      value = code
    }
  })

  var sandbox = createSandbox(value, opts)

  function onclick (e) {
    e.preventDefault()
    options.verify(value)
  }

  return html`<div class="challenge-code-input">
    ${headerText ? html`<h2>${headerText}</h2>` : ''}
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    ${sandbox.render()}

    <button onclick=${onclick}>${buttonText}</button>
  </div>`
}
