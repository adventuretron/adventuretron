var fs = require('fs')
var html = require('choo/html')

// TODO: i18nify
module.exports = function createFileInput (params) {
  params = params || {}
  var headerText = params.headerText
  var buttonText = params.buttonText || 'Check your answer'
  var descriptionText = params.descriptionText
  var placeholder = params.placeholder
  var value

  function onchange (e) {
    value = fs.readFileSync(e.target.files[0].path, 'utf8')
    params.verify(value)
  }

  function onsubmit (e) {
    e.preventDefault()
    params.verify(value)
  }

  return html`<div class="challenge-value-input">
    <h2>${headerText}</h2>
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <form onsubmit=${onsubmit}>
      <input type="file" onchange=${onchange} />
      <input type="submit" value="${buttonText}" />
    </form>
  </div>`
}
