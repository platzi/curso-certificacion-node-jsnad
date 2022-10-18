'use strict'

function answer (emitter) {
  let k = 0

  emitter.on('jump', () => {
    k++
    if (k === 3) {
      process.exit()
    }
    emitter.emit('run')
  })
}
