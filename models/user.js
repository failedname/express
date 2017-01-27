'use strict'
 const mongo = require('mongoose')
 const schema = mongo.Schema
 const bcrypt = require('bcrypt-nodejs')

 const userShema = schema({
   email: {type: String, unique: true, lowercase: true},
   name: String,
   avatar: String,
   pass: {type: String, select: false}
   // signupDate: {type: Date, default: Date.now()}
 })

//  userShema.pre('save', (next) => {
//     let user =  this
//     if (!user.isModified('pass')) return next()
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) return next()
//       bcrypt.hash(user.pass, salt, null, (err, hash) => {
//          if (err) return next(err)
//          user.pass = hash
//          next()
//       })
//    })
// })


module.exports = mongo.model('User', userShema)
