'use strict'

const searchUser = require('./totest')
const expect = require('chai').expect

describe('searchUser returns', () => {
  it('returns an users object', () => {
    expect(searchUser('admin')).to.deep.equal({
      password: 'admin',
      role: '67890'
    })
  })
  it('returns an object with an error', () => {
    expect(searchUser('nouser')).to.deep.equal({
      error: 'not found'
    })
  })
  it('throws an error', () => {
    expect(() => searchUser(123)).to.throw(TypeError)
  })
})
