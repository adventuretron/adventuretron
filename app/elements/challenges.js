var html = require('choo/html')
var css = require('dom-css')

module.exports = function (state, prev, send) {
  var challenges = state.challenges.list

  var el = html`
    <div class="challenges-menu">
      <h2>Challenges</h2>
      <ul class="list-reset">
        ${challenges.map(function (item) {
          return html`<li><a href="/${item.title}">${item.title}</a></li>`
        })}
      </ul>
    </div>
  `

  css(el, {
    
  })

  return el
}
