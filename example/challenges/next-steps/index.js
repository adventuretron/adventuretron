var fs = require('fs')
var path = require('path')
var html = require('choo/html')
var css = require('dom-css')
var marked = require('marked')

module.exports = {
  slug: 'next-steps',
  title: function (language) {
    var text = require('./i18n')
    return text[language].title
  },
  content: function (state, prev, send) {
    var filepath = path.join(__dirname, 'content_' + state.app.language + '.md')
    return marked(fs.readFileSync(filepath, 'utf8'))
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
