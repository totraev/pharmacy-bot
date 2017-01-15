import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config'
import db from '../db'

const { expiresIn, secret, algorithm } = config.jwt
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const PharmacySchema = new Schema({
  email: {
    type: String,
    index: true,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    index: '2d',
    required: true
  },
  address: String,
  phone: String
})

PharmacySchema.pre('save', function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err)

      this.password = hash
      next()
    })
  })
})

PharmacySchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err)

    cb(null, isMatch)
  })
}

PharmacySchema.methods.generateToken = function(cb) {
  const { email, location, _id: id } = this

  jwt.sign({email, location, id}, secret, { algorithm, expiresIn }, (err, token) => {
    cb(err, token)
  })
}

export default db.model('Pharmacy', PharmacySchema)
