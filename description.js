var assert = require('assert')
var html = require('choo/html')

module.exports = function createDescription (challenge, language) {
  assert.ok(challenge, 'adventuretron/description: challenge object is required')
  assert.ok(language, 'adventuretron/description: language string is required')

  var el = html`<div class="challenge-description"></div>`
  el.innerHTML = challenge.description[language]
  return el
}
