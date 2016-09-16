var fs = require('fs')
var marked = require('marked')
var hl = require('highlight.js')

marked.setOptions({
  highlight: function (code, lang) {
    try {
      return highlight(code, lang)
    } catch (e) {
      console.error(e)
    }
  }
})

function highlight (code, lang) {
  var out = lang ? hl.highlight(lang, code) : hl.highlightAuto(code)
  return out.value
}

function renderMarkdown (str) {
  return str ? marked(str) : ''
}

function readFileSync (filepath) {
  return renderMarkdown(fs.readFileSync(filepath, 'utf8'))
}

module.exports = require('beldown')
module.exports.fromString = renderMarkdown
module.exports.readFileSync = readFileSync
