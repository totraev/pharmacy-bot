import express from 'express'
import map from '../controllers/map'

const router = express.Router()

router.get('/', map.index)

export default router
