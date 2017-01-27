'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const key = require('../config')

function createToken (user) {
  let payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }
  return jwt.encode(payload, key.secret_token)
}

module.exports = createToken
