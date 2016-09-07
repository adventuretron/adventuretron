var html = require('choo/html')

// TODO: i18nify
module.exports = function createValueInput (params) {
  params = params || {}
  var headerText = params.headerText
  var buttonText = params.buttonText || 'Check your answer'
  var descriptionText = params.descriptionText
  var placeholder = params.placeholder
  var value

  function oninput (e) {
    value = e.target.value
  }

  function onsubmit (e) {
    e.preventDefault()
    params.verify(value)
  }

  return html`<div class="challenge-value-input">
    <h2>${headerText}</h2>
    ${descriptionText ? html`<p>${descriptionText}</p>` : ''}
    <form onsubmit=${onsubmit}>
      <input type="text" placeholder="${placeholder}" oninput=${oninput} />
      <input type="submit" value="${buttonText}" />
    </form>
  </div>`
}
