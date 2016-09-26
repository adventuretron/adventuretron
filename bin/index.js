#! /usr/bin/env node

var subcommand = require('subcommand')

var match = subcommand({
  root: require('./commands/help'),
  commands: [
    require('./commands/help'),
    require('./commands/new')
  ]
})

match(process.argv.slice(2))
