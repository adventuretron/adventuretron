var fs = require('fs')
var marked = require('marked')
var domify = require('domify')
var html = require('choo/html')

function renderMarkdown (htmlstring) {
  var el = html`<div></div>`
  el.innerHTML = marked(htmlstring)
  return el
}

function readFileSync (filepath) {
  return marked(fs.readFileSync(filepath, 'utf8'))
}

module.exports = renderMarkdown
module.exports.readFileSync = readFileSync
