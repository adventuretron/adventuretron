var assert = require('assert')
var html = require('choo/html')

module.exports = function (options) {
  assert.equal(typeof options, 'object', 'options object is required')
  assert.ok(options.errors, 'options.errors array is required')

  var errors = options.errors
  var headerText = options.headerText

  return html`<div class="errors">
    ${headerText ? html`<h2>${headerText}</h2>` : ''}
    ${errors.map(function (err) {
      return html`<div class="error">${err}</div>`
    })}
  </div>`
}
