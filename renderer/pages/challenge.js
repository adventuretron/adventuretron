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

  var slug
  if (!state.params.challenge) {
    slug = state.challenges.list[state.challenges.current].i18n[state.i18n.current].slug
  } else {
    slug = state.params.challenge.replace(/^\/|\/$/g, '')
  }

  var challenge = state.challenges.list.filter(function (item) {
    var text = item.i18n[state.i18n.current]
    return text.slug === slug
  })[0]

  var params = {
    i18n: state.i18n,
    challenge: challenge,
    challenges: state.challenges,
    language: state.i18n.current
  }

  return html`<div id="app" class="${prefix}">
    <main role="main" class="app-main flex">
      ${header(state, prev, send)}
      ${sidebar(state, prev, send)}
      <div class="flex-auto pa2 mt3">
        ${challenge.content(params, send)}
      </div>
    </main>
  </div>`
}
