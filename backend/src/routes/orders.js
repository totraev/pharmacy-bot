import express from 'express'
import order from '../controllers/orders'

const router = express.Router()

router
	.get('/', order.index)
	.get('/:id', order.view)

export default router
