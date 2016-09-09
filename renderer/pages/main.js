var html = require('choo/html')
var css = require('sheetify')

var header = require('../elements/header')
var sidebar = require('../elements/sidebar')
var content = require('../elements/content')

module.exports = function welcome (state, prev, send) {
  return html`<div></div>`
}
