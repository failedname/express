'use strict';

const mongo = require('mongoose')
const schema = mongo.Schema


const productSchema = schema({
  name: String,
  picture: String,
  price: Number,
  category: {type: String, name: ['computers', 'phones']},
  description: String
})

module.exports = mongo.model('Product', productSchema)
