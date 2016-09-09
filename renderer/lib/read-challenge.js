var fs = require('fs')
var path = require('path')
var glob = require('glob')
var markdown = require('../../markdown')

module.exports = function (challenges, dirname) {
  var dir = path.join(challenges, dirname)
  var files = glob.sync(path.join(dir, '/**'))
  var challenge = require(path.join(dir, 'index.js'))
  challenge.path = dir
  challenge.dirname = dirname
  challenge.description = {}
  files.forEach(function (file) {
    if (file.indexOf('description') > -1) {
      var parsed = path.parse(file)
      var language = parsed.name.split('_')[1]
      challenge.description[language] = markdown.readFileSync(file)
    }
  })
  return challenge
}
