var fs = require('fs')
var beldown = require('beldown')
var marked = require('marked')
var hl = require('highlight.js')

var options = {
  highlight: function (code, lang) {
    try {
      return highlight(code, lang)
    } catch (e) {
      console.error(e)
    }
  }
}

marked.setOptions(options)
beldown.setOptions(options)

function highlight (code, lang) {
  var out = lang ? hl.highlight(lang, code) : hl.highlightAuto(code)
  return out.value
}

function markdown (str) {
  return str ? marked(str) : ''
}

function readFileSync (filepath) {
  return markdown(fs.readFileSync(filepath, 'utf8'))
}

module.exports = function () {
  if (typeof arguments[0] === 'string') {
    return markdown.apply(null, arguments)
  } else if (Array.isArray(arguments[0])) {
    return beldown.apply(null, arguments)
  }
}

module.exports.readFileSync = readFileSync
