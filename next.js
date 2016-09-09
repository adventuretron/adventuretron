var assert = require('assert')
var html = require('choo/html')

module.exports = function createNext (options) {
  assert.ok(options, 'adventuretron/next: options object is required')
  assert.ok(options.headerText, 'adventuretron/next: options.headerText is required')
  assert.ok(options.buttonText, 'adventuretron/next: options.buttonText is required')
  assert.ok(options.onclick, 'adventuretron/next: options.onclick is required')

  return html`<div class="challenge-next">
    <h2>${options.headerText}</h2>
    ${options.descriptionText ? html`<p>${options.descriptionText}</p>` : ''}
    <button onclick=${options.onclick}>${options.buttonText}</button>
  </div>`
}
