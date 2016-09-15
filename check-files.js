var xtend = require('xtend')
var html = require('choo/html')
var checkFiles = require('./lib/check-files')

module.exports = function checkFilesInput (params) {
  params = params || {}
  var files = params.files
  var headerText = params.headerText
  var buttonText = params.buttonText || 'Check your answer'
  var descriptionText = params.descriptionText

  function onsubmit (e) {
    e.preventDefault()
    var files = [].map.call(e.target[0].files, function (item) {
      return item.path
    })
    checkFiles(files, params.verify)
  }

  return html`<div class="challenge-check-files-input">
    <h2>${headerText}</h2>
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <form onsubmit=${onsubmit}>
      <input type="file" webkitdirectory onchange=${onchange} />
      <input type="submit" value="${buttonText}" />
    </form>
  </div>`
}
