import mongoose from 'mongoose'
import db from '../db'

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantityWH: {
    type: Number,
    required: true
  },
  producer: String,
  location: {
    type: [Number],
    index: '2d',
    required: true
  },
  pharmacy: {
    type: ObjectId,
    ref: 'Pharmacy'
  }
})

export default db.model('Product', ProductSchema)
