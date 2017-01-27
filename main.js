'use strict'
const mongo = require('mongoose')
const config = require('./config')
const app = require('./app')
mongo.Promise = global.Promise
mongo.connect(config.db, (err, res) => {
  if (err) {
    return console.log('Error al conectar a base de datos')
  }
  console.log('conexion base de datos')
  app.listen(config.port, () => {
    console.log(`Servidor node corriendo localhots:${config.port}`)
  })
})
