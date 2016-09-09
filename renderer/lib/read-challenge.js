var fs = require('fs')
var path = require('path')
var glob = require('glob')
var markdown = require('../../markdown')

module.exports = function (challenges, dirname) {
  var dir = path.join(challenges, dirname)
  var files = glob.sync(path.join(dir, '/*.md'))
  var challenge = require(path.join(dir, 'index.js'))
  challenge.path = dir
  challenge.dirname = dirname
  challenge.description = {}

  files.forEach(function (file) {
    var parsed = path.parse(file)

    if (file.indexOf('_') > -1) {
      var split = parsed.name.split('_')
      var name = split[0]
      var lang = split[1]
      challenge[name][lang] = markdown.readFileSync(file)
    } else {
      // leaving off a language codes assumes english. not a fan of this really but it does make things simpler
      challenge[parsed.name].en = markdown.readFileSync(file)
    }
  })

  return challenge
}
