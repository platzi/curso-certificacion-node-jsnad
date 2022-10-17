'use strict'

// AVOID changing this file, any change will result in zero-grade

const { EventEmitter } = require('events')

const emitter = new EventEmitter()

setTimeout(function () {
  emitter.emit('error', Error('There is an error and you should handle it'))
}, 500)

module.exports = emitter
