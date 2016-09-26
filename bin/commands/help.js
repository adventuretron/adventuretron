var usage = `
  USAGE:
    adventuretron {command} [options]
  COMMANDS:
    new,       start a new adventuretron workshop
    help,      show this help message
  NEW
    adventuretron new {workshop-name}
  HELP
    adventuretron help
`

module.exports = {
  name: 'help',
  command: function (args) {
    console.log(usage)
  },
  options: []
}
