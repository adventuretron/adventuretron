var html = require('choo/html')

// TODO: i18nify
module.exports = function createNext (params, send) {
  params = params || {}
  var headerText = params.headerText || 'Move on to the next challenge'
  var buttonText = params.buttonText || 'Next challenge'
  var descriptionText = params.descriptionText

  return html`<div class="challenge-next">
    <h2>${headerText}</h2>
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <button onclick=${params.onclick}>${buttonText}</button>
  </div>`
}
