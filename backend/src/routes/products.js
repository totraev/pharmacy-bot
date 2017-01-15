import express from 'express'
import product from '../controllers/products'
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'upload/' })

router
	.get('/', product.index)
	.get('/:id', product.view)
	.post('/', product.create)
	.delete('/:id', product.delete)
	.patch('/:id', product.update)
	.post('/upload', upload.single('csv'), product.upload)

export default router
