var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var languages = state.app.languages
  var keys = Object.keys(languages)

  function onchange (e) {
    var selectBox = e.target
    var option = selectBox.children[selectBox.selectedIndex]
    var language = option.id
    send('app:setLanguage', language)
  }

  // TODO: make sure current language shows as selected
  var el = html`<select class="select-language btn-outline fit right" onchange=${onchange}>
    ${keys.map(function (key) {
      return html`<option id="${key}">${languages[key]}</option>`
    })}
  </select>`

  css(el, {
    border: '1px solid #ccc',
    height: '30px'
  })

  return el
}
