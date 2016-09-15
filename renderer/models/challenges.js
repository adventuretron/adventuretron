var assert = require('assert')

module.exports = function (options) {
  assert.ok(options || typeof options === 'object', 'options object is required')
  assert.ok(options.challenges, 'options.challenges must be an object of objects')

  return {
    namespace: 'challenges',
    state: {
      complete: [],
      done: false,
      current: Object.keys(options.challenges)[0],
      items: options.challenges
    },
    reducers: {
      challengeComplete: function (data, state) {
        state.items[state.current].success = true
        state.items[state.current].answer = data
        state.items[state.current].error = null
        state.complete.push(state.current)
        return state
      },
      challengeError: function (data, state) {
        state.items[state.current].error = data
        return state
      },
      setChallenge: function (data, state) {
        return { current: data }
      },
      done: function (data, state) {
        return { done: true }
      }
    },
    effects: {
      success: function (data, state, send, done) {
        send('challenges:challengeComplete', data, done)
      },
      error: function (data, state, send, done) {
        send('challenges:challengeError', data, done)
      },
      next: function (data, state, send, done) {
        var keys = Object.keys(state.items)
        send('challenges:challengeComplete', function () {
          if (keys.length === state.complete.length) {
            send('challenges:done', done)
          } else {
            var index = keys.indexOf(state.current)
            var slug = keys[index + 1]
            send('challenges:setChallenge', slug, function () {
              document.body.scrollTop = 0
              done()
            })
          }
        })
      }
    }
  }
}
