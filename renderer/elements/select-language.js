var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {
      border: 1px solid #ccc;
      height: 30px;
    }
  `

  var languages = state.i18n.languages
  var keys = Object.keys(languages)

  function onchange (e) {
    var selectBox = e.target
    var option = selectBox.children[selectBox.selectedIndex]
    var language = option.id
    send('i18n:setLanguage', language)
  }

  return html`<select class="${prefix} select-language btn-outline fit right" onchange=${onchange}>
    ${keys.map(function (key) {
      return html`<option id="${key}">${languages[key]}</option>`
    })}
  </select>`
}
