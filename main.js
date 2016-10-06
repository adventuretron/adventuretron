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
  global.userData = app.getPath('userData')

  var adventuretron = new EventEmitter()
  adventuretron.app = app

  app.on('ready', function ready () {
    var size = electron.screen.getPrimaryDisplay().workAreaSize
    options.width = options.width || size.width
    options.height = options.height || size.height
    adventuretron.window = new BrowserWindow(options)
    adventuretron.window.loadURL(options.index)
    adventuretron.window.webContents.openDevTools()
    adventuretron.emit('ready')
  })

  return adventuretron
}
