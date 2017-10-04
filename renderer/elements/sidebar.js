var html = require('bel')

var challenges = require('./challenges')

module.exports = function (state, prev, send) {
  function onclick () {
    send('challenges:reset')
  }

  var el = html`
    <div class="app-sidebar ph4 pt3 fixed">
      ${challenges(state, prev, send)}
      <p><a class="link pv0 hover-black focus-black gray" href="#" onclick=${onclick}>
        Start over</a></p>
    </div>
  `

  el.style.width = '300px'
  el.style.backgroundColor = '#fafaf8'
  el.style.borderRight = '1px solid #eee'
  el.style.top = '0'
  el.style.bottom = '0'
  return el
}
