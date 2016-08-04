module.exports = function (options) {
  return {
    namespace: 'location',
    state: {
      pathname: '/'
    },
    reducers: {
      pathname: function (data, state) {
        return { pathname: data.pathname }
      }
    },
    subscriptions: [
      function catchLinks (send, done) {
        window.onclick = function (e) {
          var node = (function traverse (node) {
            if (!node) return
            if (node.localName !== 'a') return traverse(node.parentNode)
            if (node.href === undefined) return traverse(node.parentNode)
            if (window.location.host !== node.host) return traverse(node.parentNode)
            return node
          })(e.target)

          if (!node) return
          e.preventDefault()
          var href = node.href.replace('file://', '')

          send('location:pathname', { pathname: href.replace(/#$/, '') }, done)
        }
      }
    ]
  }
}
