var path = require('path')
var browserify = require('browserify')

var infile = path.join(__dirname, '..', 'renderer', 'index.js')
var outfile = path.join(__dirname, '..', 'renderer', 'css', 'bundle.css')

browserify(infile)
  .transform('sheetify/transform')
  .plugin('css-extract', { out: outfile })
  .bundle()
