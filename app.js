'use strict'

var express = require('express')
const body = require('body-parser')
var app = express()
const api = require('./routes')
app.use(body.urlencoded({extended: false}))
app.use(body.json())
app.use('/api', api)

module.exports = app
