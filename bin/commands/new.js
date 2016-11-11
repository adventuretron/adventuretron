var fs = require('fs')
var path = require('path')
var exec = require('child_process').execSync
var createHTML = require('create-html')
var maxstache = require('maxstache-stream')
var each = require('each-async')
var tar = require('tar-fs')

var electronVersion = require('../../package.json').dependencies.electron

module.exports = {
  name: 'new',
  command: function (args) {
    var cwd = path.parse(process.cwd())
    var files = ['main.js', 'renderer.js']
    var templatesDir = path.join(__dirname, '..', 'templates')
    var outputDir = process.cwd()

    var main = fs.createReadStream(path.join(templatesDir, 'main.js'))
    var renderer = fs.createReadStream(path.join(templatesDir, 'renderer.js'))

    var ctx = {
      title: args._[0] || cwd.base,
      slug: cwd.base
    }

    each(files, function (file, i, next) {
      var filepath = path.join(outputDir, file)
      var stream = getTemplate(file)
      stream.pipe(maxstache(ctx)).pipe(fs.createWriteStream(filepath))
      stream.on('end', next)
    }, function () {
      var filepath = path.join(outputDir, 'index.html')
      createIndex(filepath, ctx, function (err) {
        if (err) console.log(err)
        var opts = { stdio: [ 0,1,2 ] }

        exec('npm init', opts)
        exec('npm i --save adventuretron', opts)
        exec('npm i --save-dev browserify insert-css watchify sheetify css-extract', opts)
        exec('npm rebuild --runtime=electron --target=' + electronVersion + ' --disturl=https://atom.io/download/atom-shell --build-from-source', opts)
        copy('challenges', templatesDir, outputDir)
        copy('i18n', templatesDir, outputDir)

        var pkgPath = path.join(outputDir, 'package.json')
        var pkg = require(pkgPath)

        pkg.scripts = {
          build: 'browserify renderer.js -t sheetify/transform -p [ css-extract -o bundle.css ] -o /dev/null',
          watch: 'watchify renderer.js -t sheetify/transform -p [ css-extract -o bundle.css ] -o /dev/null',
          start: 'npm run build && npm run watch & electron .'
        }

        fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), function (err) {
          if (err) console.log(err)
          exec('npm run build', opts)
        })
      })
    })
  },
  options: []
}

function getTemplate (filename) {
  return fs.createReadStream(path.join(__dirname, '..', 'templates', filename))
}

function createIndex (filepath, ctx, callback) {
  var html = createHTML({
    title: ctx.title,
    script: 'renderer.js',
    css: 'bundle.css'
  })

  fs.writeFile(filepath, html, callback)
}

function copy (dirname, source, target) {
  tar.pack(path.join(source, dirname)).pipe(tar.extract(path.join(target, dirname)))
}
