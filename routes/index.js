'use strict'
const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/auth')
const User = require('../models/user')
const Token = require('../service')

const api = express.Router()

api.get('/product/', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.createProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
api.post('/user', (req, res) => {
  console.log(req.body)
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    avatar: req.body.avatar,
    pass: req.body.pass
  })
  user.save((err) => {
    if (err) return res.status(500).send({'mensaje': `error al crear usuario ${err}`})
    res.status(200).send({token: Token.createToken(user)})
  })
})
module.exports = api
