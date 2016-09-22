var path = require('path')
var test = require('tape')
var md = require('../markdown')

test('tagged template string', function (t) {
  var html = md`
    # a
    
    b
  `

  var expected = '<div>\n<h1 id="a">a</h1>\n<p>b</p>\n</div>'
  t.equal(html.toString(), expected)
  t.end()
})

test('string', function (t) {
  var html = md('# a\nb')
  var expected = '<h1 id="a">a</h1>\n<p>b</p>\n'
  t.equal(html, expected)
  t.end()
})

test('file', function (t) {
  var html = md.readFileSync(path.join(__dirname, 'fixtures', 'markdown', 'a.md'))
  var expected = '<h1 id="hi">hi</h1>\n<p>this is markdown</p>\n'
  t.equal(html, expected)
  t.end()
})
