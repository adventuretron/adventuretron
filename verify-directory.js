var fs = require('fs')
var path = require('path')
var assert = require('assert')
var xtend = require('xtend')
var html = require('choo/html')
var css = require('sheetify')
var filesExist = require('./lib/files-exist')

module.exports = function verifyDirectory (options) {
  assert.ok(options, 'adventuretron/verify-directory: options object is required')
  assert.ok(options.buttonText, 'adventuretron/verify-directory: options.buttonText is required')

  var files = options.files
  var headerText = options.headerText
  var buttonText = options.buttonText
  var descriptionText = options.descriptionText

  var prefix = css`
    :host {}

    .dir-finder {
      visibility: hidden;
    }
  `

  var dirFinder = html`<input class="dir-finder" type="file" webkitdirectory onchange=${onchange} />`

  function onclick (e) {
    dirFinder.click()
  }

  function onchange (e) {
    e.preventDefault()
    var dir = e.target.files[0].path
    files = files.map(function (file) {
      return path.join(dir, file)
    })
    filesExist(files, options.verify)
  }

  return html`<div class="${prefix} challenge-check-files-input">
    ${headerText ? html`<h2>${headerText}</h2>` : ''}
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <button onclick=${onclick}>${buttonText}</button>
  </div>`
}
