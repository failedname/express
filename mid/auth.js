'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const key = require('../config')

function isAuth (req, res, next) {
  if (!req.headers.authorization) return res.status(403).send({'mensaje': 'Porhibido acceso'})
  const token = req.headers.authorization.split(" ")[1]
  const payload = jwt.decode(token, key.secret_token)
  if (payload <= moment().unix()) return res.status(401).send({mensaje: 'Token expirado'})
  req.user = payload.sub
  next()

}

module.exports = isAuth
