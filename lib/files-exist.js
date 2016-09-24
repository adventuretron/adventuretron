var fs = require('fs')
var path = require('path')
var assert = require('assert')
var each = require('each-async')

/*
* Check that a directory has the correct files
*/
module.exports = function checkFiles (files, callback) {
  assert.ok(files, 'files array is required')
  assert.ok(callback, 'callback function is required')
  var fail = []
  var ok = true

  each(files, function (filepath, i, next) {
    fs.stat(filepath, function (err, stats) {
      if (err || !stats) {
        fail.push(filepath)
        ok = false
      }
      next()
    })
  }, function () {
    if (!ok) {
      callback(new Error(`Files/directories do not exist: ${fail.join(', ')}`), ok)
    } else {
      callback(null, ok)
    }
  })
}
