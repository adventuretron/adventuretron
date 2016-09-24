var path = require('path')
var test = require('tape')
var filesExist = require('../lib/files-exist')

test('make sure files exist', function (t) {
  var dir = path.join(__dirname, 'fixtures', 'check-files')

  var files = [
    path.join(dir, 'a.js'),
    path.join(dir, 'b.md'),
    path.join(dir, 'c'),
    path.join(dir, 'c', 'd.js')
  ]

  filesExist(files, function (err, ok) {
    t.notOk(err)
    t.ok(ok)
    t.end()
  })
})
