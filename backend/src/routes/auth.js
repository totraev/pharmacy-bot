import express from 'express'
import auth from '../controllers/auth'

const router = express.Router()

router
  .post('/sign_up', auth.create)
  .post('/sign_in', auth.authenticate)

export default router
