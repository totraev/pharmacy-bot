import mongoose from 'mongoose'
import db from '../db'

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const PharmacySchema = new Schema({

})

export default db.model('Pharmacy', PharmacySchema)
