var fs = require('fs')
var path = require('path')
var EventEmitter = require('events').EventEmitter
var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

module.exports = function createElectronApp (options) {
  options = options || {}
  if (!options.dir) options.dir = app.getAppPath()
  if (!options.index) options.index = 'file://' + path.join(options.dir, 'index.html')
  options.width = options.width || 800
  options.height = options.height || 400
  app.on('ready', ready)
  
  var adventuretron = new EventEmitter()
  adventuretron.app = app

  function ready () {
    adventuretron.window = new BrowserWindow(options)
    adventuretron.window.loadURL(options.index)
    adventuretron.window.webContents.openDevTools()
    adventuretron.emit('ready')
  }

  return adventuretron
}
