var html = require('choo/view')
var css = require('sheetify')

module.exports = function (state, prev, send) {
  var prefix = css`
    :host {

    }
  `

  // TODO: populate from state
  // TODO: make each item a link that triggers a route
  return html`
    <div class="challenges-menu">
      <h2>Challenges</h2>
      <ul class="list-reset">
        <li>First module</li>
        <li>Use your first module</li>
      </ul>
    </div>
  `
}
