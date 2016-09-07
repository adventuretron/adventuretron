var fs = require('fs')
var marked = require('marked')
var domify = require('domify')

function renderMarkdown (htmlstring) {
  return marked(htmlstring)
}

function readFileSync (filepath) {
  return domify(marked(fs.readFileSync(filepath, 'utf8')))
}

module.exports = renderMarkdown
module.exports.readFileSync = readFileSync
