'use strict'

const users = {
  admin: {
    password: 'admin',
    role: '67890'
  }
}

function searchUser (user) {
  if (typeof user !== 'string') throw new TypeError('user must be a string')
  if (users[user]) {
    return users[user]
  } else {
    return { error: 'not found' }
  }
}

module.exports = searchUser
