var fs = require('fs')
var path = require('path')
var glob = require('glob')
var markdown = require('../../markdown')

module.exports = function (challengesDir, dirname) {
  var dir = path.join(challengesDir, dirname)
  var files = glob.sync(path.join(dir, '/*.md'))
  var challenge = require(path.join(dir, 'index.js'))
  challenge.path = dir
  challenge.slug = dirname

  files.forEach(function (file) {
    var parsed = path.parse(file)
    challenge[parsed.name] = {}

    if (file.indexOf('_') > -1) {
      var split = parsed.name.split('_')
      var name = split[0]
      var lang = split[1]
      challenge[name] = challenge[name] || {}
      challenge[name][lang] = markdown.readFileSync(file)
    } else {
      // leaving off a language code assumes english
      // not a fan of this really but it does make hello world example simpler
      challenge[parsed.name] = challenge[parsed.name] || {}
      challenge[parsed.name]['en'] = markdown.readFileSync(file)
    }
  })

  return challenge
}
