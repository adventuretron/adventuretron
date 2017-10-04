var assert = require('assert')
var html = require('choo/html')

module.exports = function verifyText (options) {
  assert.ok(options, 'adventuretron/verify-text: options object is required')
  assert.ok(options.headerText, 'adventuretron/verify-text: options.headerText is required')
  assert.ok(options.buttonText, 'adventuretron/verify-text: options.buttonText is required')
  assert.ok(options.verify, 'adventuretron/verify-text: options.verify is required')

  var headerText = options.headerText
  var buttonText = options.buttonText || 'Check your answer'
  var descriptionText = options.descriptionText
  var placeholder = options.placeholder || "type here"
  var value

  function oninput (e) {
    value = e.target.value
  }

  function onsubmit (e) {
    e.preventDefault()
    options.verify(value)
  }

  return html`<div class="challenge-value-input">
    ${headerText ? html`<h2>${headerText}</h2>` : ''}
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <form>
      <input type="text" placeholder="${placeholder}" oninput=${oninput} />
      <input type="submit" value="${buttonText}" onclick=${onsubmit} />
    </form>
  </div>`
}
