var assert = require('assert')

module.exports = function (options) {
  assert.ok(options || typeof options === 'object', 'options object is required')
  assert((options.challenges || options.challenges.length), 'options.challenges must be an array of objects with a title property and challenge, success, & verify methods')

  return {
    namespace: 'challenges',
    state: {
      current: 0,
      list: options.challenges
    },
    reducers: {
      setChallenge: function (data, state) {
        
      }
    },
    effects: {}
  }
}
