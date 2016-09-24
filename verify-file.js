var fs = require('fs')
var assert = require('assert')
var html = require('choo/html')

module.exports = function verifyFile (options) {
  assert.ok(options, 'adventuretron/verify-file: options object is required')
  assert.ok(options.headerText, 'adventuretron/verify-file: options.headerText is required')
  assert.ok(options.buttonText, 'adventuretron/verify-file: options.buttonText is required')
  assert.ok(options.verify, 'adventuretron/verify-file: options.verify is required')

  var headerText = options.headerText
  var buttonText = options.buttonText
  var descriptionText = options.descriptionText
  var placeholder = options.placeholder
  var value

  function onchange (e) {
    value = fs.readFileSync(e.target.files[0].path, 'utf8')
    options.verify(value)
  }

  function onsubmit (e) {
    e.preventDefault()
    options.verify(value)
  }

  return html`<div class="challenge-value-input">
    ${headerText ? html`<h2>${headerText}</h2>` : ''}
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <form onsubmit=${onsubmit}>
      <input type="file" onchange=${onchange} />
      <input type="submit" value="${buttonText}" />
    </form>
  </div>`
}
