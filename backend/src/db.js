import mongoose from 'mongoose'
import config from './config'

const { mongo } = config
const db = mongoose.createConnection(mongo.host)

db.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

export default db
