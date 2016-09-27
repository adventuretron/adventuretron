var level = require('level-browserify')

module.exports = function (opts) {
  return level(opts.name, { valueEncoding: 'json' })
}
