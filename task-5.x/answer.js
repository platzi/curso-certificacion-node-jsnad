'use strict'

const emitter = require('./emitter')

emitter.on('error', (err) => {
  process.exit(1)
})
