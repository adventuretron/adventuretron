var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {

    }
  `

  var challenges = state.challenges.list

  return html`
    <div class="challenges-menu">
      <h2>Challenges</h2>
      <ul class="list-reset">
        ${challenges.map(function (item) {
          return html`<li><a href="/${item.title}">${item.title}</a></li>`
        })}
      </ul>
    </div>
  `
}
