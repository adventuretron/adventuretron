var assert = require('assert')

module.exports = function (options) {
  assert.ok(options || typeof options === 'object', 'options object is required')
  assert.ok((options.challenges || options.challenges.length), 'options.challenges must be an array of objects with a title property and challenge, success, & verify methods')

  return {
    namespace: 'challenges',
    state: {
      complete: [],
      done: false,
      current: 0,
      list: options.challenges
    },
    reducers: {
      challengeComplete: function (data, state) {
        state.list[state.current].success = true
        state.list[state.current].answer = data
        state.complete.push(state.current)
        return state
      },
      challengeError: function (data, state) {
        state.list[state.current].error = data
        return state
      },
      nextChallenge: function (data, state) {
        return { current: state.current + 1 }
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
        send('challenges:challengeComplete', function () {
          if (state.list.length === state.current + 1) {
              send('challenges:done', done)
          } else {
            send('challenges:nextChallenge', done)
          }
        })
      }
    }
  }
}
