'use strict'

const { execFileSync } = require('child_process')

function answer (file, directory) {
  execFileSync(file, { cwd: directory })
}

module.exports = answer
