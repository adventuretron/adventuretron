var path = require('path')
var remote = require('electron').remote;
var level = require('level')

module.exports = function (opts) {
  var dbpath = path.join(remote.getGlobal('userData'), 'leveldb')
  return level(dbpath, { valueEncoding: 'json' })
}
