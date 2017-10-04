module.exports = function (name, opts) {
  if (typeof name ==='object') {
    opts = name
    name = opts.name
  }

  if (!opts) opts = {}

  var name = name || opts.name || 'adventuretron'

  function get (key) {
    var value = window.localStorage.getItem(name + '-' + key) 
    return value && JSON.parse(value)
  }

  function put (key, value) {
    return window.localStorage.setItem(name + '-' + key, JSON.stringify(value))
  }

  return {
    get: get,
    put: put
  }
}
