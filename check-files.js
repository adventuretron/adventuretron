var xtend = require('xtend')
var html = require('choo/html')
var css = require('sheetify')
var checkFiles = require('./lib/check-files')

module.exports = function checkFilesInput (params) {
  params = params || {}
  var files = params.files
  var headerText = params.headerText
  var buttonText = params.buttonText || 'Check your answer'
  var descriptionText = params.descriptionText

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
    var files = [].map.call(e.target.files, function (item) {
      return item.path
    })
    checkFiles(files, params.verify)
  }

  return html`<div class="${prefix} challenge-check-files-input">
    <h2>${headerText}</h2>
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <button onclick=${onclick}>${buttonText}</button>
  </div>`
}
