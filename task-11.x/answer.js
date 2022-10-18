'use strict'

const os = require('os')

if (os.platform() === 'linux') {
  console.log(os.homedir())
} else {
  console.log(os.tmpdir())
}
