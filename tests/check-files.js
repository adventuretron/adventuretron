var path = require('path')
var test = require('tape')
var checkFiles = require('../lib/check-files')

test('make sure files exist', function (t) {
  var dir = path.join(__dirname, 'fixtures', 'check-files')

  var files = [
    path.join(dir, 'a.js'),
    path.join(dir, 'b.md'),
    path.join(dir, 'c'),
    path.join(dir, 'c', 'd.js')
  ]

  checkFiles(files, function (err, ok) {
    t.notOk(err)
    t.ok(ok)
    t.end()
  })
})
