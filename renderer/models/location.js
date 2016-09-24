var shell = require('electron').shell

module.exports = {
  namespace: 'location',
  state: {
    pathname: '/'
  },
  reducers: {
    pathname: function (data, state) {
      return { pathname: data.pathname }
    }
  },
  effects: {
    redirect: function (data, state, send, done) {
      window.history.pushState(null, null, data)
      send('location:pathname', { pathname: data.replace(/#$/, '') }, function () {
        document.body.scrollTop = 0
        done()
      })
    }
  },
  subscriptions: [
    function catchLinks (send, done) {
      window.onclick = function (e) {
        e.preventDefault()
        var node = (function traverse (node) {
          if (!node) return
          if (node.localName !== 'a') return traverse(node.parentNode)
          if (node.href === undefined) return traverse(node.parentNode)
          return node
        })(e.target)

        if (!node || !node.href) return
        e.preventDefault()
        if (node.href.indexOf('http') > -1) {
          return shell.openExternal(node.href)
        }
        var href = node.href.replace('file://', '')
        send('location:redirect', href.replace(/#$/, ''), done)
      }
    }
  ]
}
