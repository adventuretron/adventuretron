var html = require('choo/html')
var css = require('sheetify')

var domify = require('domify')

var header = require('../elements/header')
var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function main (state, prev, send) {
  var prefix = css`
    :host {
      backgroundColor: #fff;
      height: 100%;
    }
  `

  var slug = state.params.challenge ? state.params.challenge.replace(/^\/|\/$/g, '') : ''

  var challenge = state.challenges.list.filter(function (item) {
    var text = item.i18n[state.i18n.current]
    return text.slug === slug
  })[0]

  return html`<div id="app" class="${prefix}">
    <main role="main" class="app-main flex">
      ${header(state, prev, send)}
      ${sidebar(state, prev, send)}
      <div class="flex-auto pa2 mt3">
        ${challenge.content(state, prev, send)}
      </div>
    </main>
  </div>`
}
