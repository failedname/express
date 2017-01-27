'use strict'

const User = require('../models/user')
const Token = require('../service')

function createUser (req, res) {
  console.log(req.body)
  let user = User()
  user.email = req.body.email
  user.name = req.body.name
  user.avatar = req.body.avatar
  user.pass = req.body.pass

  user.save((err) => {
    if (err) return res.status(500).send({'mensaje': 'error al crear usuario'})
    res.status(200).send({token: Token.createToken(user)})
  })
}

module.exports = createUser
