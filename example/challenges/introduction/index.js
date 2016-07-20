var html = require('choo/html')
var css = require('dom-css')

module.exports = {
  title: 'introduction',
  content: function (state, prev, send) {
    // return html content of the challenge
    console.log(state.params)
    return html`<h1>hihiihihi</h1>`
  },
  solution: function () {
    // testable example solution returned in string

    return `
      var message = 'hello'
    `
  },
  verify: function (err) {
    // verify the user's solution
  }
}
