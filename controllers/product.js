'use strict'

const Product = require('../models/product')

function createProduct (req, res) {
  console.log(req.body)
  let product = Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, stored) => {
    if (err) {
      res.status(500).send({'mensaje': 'error al guardar'})
    }
    res.status(200).send({'product': stored})
  })
}
function getProduct (req, res) {
  let pro = req.params.productId
  Product.findById(pro, (err, product) => {
    if (err) res.status(500).send({'mensaje': 'Error en la busqueda'})
    if (!product) res.status(404).send({'mensaje': 'Producto no existe'})
    res.status(200).send({product})
  })
}
function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if (err) res.status(500).send({'mensaje': 'Error en la busqueda'})
    if (!products) res.status(404).send({'mensaje': 'Productos no existen'})
    res.status(200).send({products})
  })
}
function updateProduct (req, res) {
  let pro = req.params.productId
  let update = req.body
  Product.findByIdAndUpdate(pro, update, (err, productUpdate) => {
    if (err) return res.status(500).send({'mensaje': 'Error al actualizar'})
    res.status(200).send({product: productUpdate})
  })
}
function deleteProduct (req, res) {
  let pro = req.params.productId
  Product.findById(pro, (err, product) => {
    if (err) return res.status(500).send({'mensaje': 'Error al borrar'})
    product.remove(err => {
      if (err) return res.status(500).send({'mensaje': 'Error al borrar'})
      res.status(200).send({'mensaje': 'Producto eliminado'})
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  createProduct
}
