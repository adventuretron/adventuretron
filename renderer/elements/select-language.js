var html = require('bel')

module.exports = function (state, prev, send) {
  var languages = state.i18n.languages
  var keys = Object.keys(languages)

  function onchange (e) {
    var selectBox = e.target
    var option = selectBox.children[selectBox.selectedIndex]
    var language = option.id
    send('i18n:setLanguage', language)
  }

  return html`<select class="select-language btn-outline fit right ba b--silver" onchange=${onchange}>
    ${keys.map(function (key) {
      return html`<option id="${key}">${languages[key]}</option>`
    })}
  </select>`
}
