import express from 'express'
import pharmacy from '../controllers/pharmacy'

const router = express.Router()

router.get('/', pharmacy.index)

export default router
