import mongoose from 'mongoose'
import db from '../db'

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const OrderItemSchema = new Schema({
  product: {
    type: ObjectId,
    ref: 'Product'
  },
  quantity: Number
})

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  products: [OrderItemSchema],
  pharmacy: {
    type: ObjectId,
    ref: 'Pharmacy',
    required: true,
    index: true
  }
})

export default db.model('Order', OrderSchema)
