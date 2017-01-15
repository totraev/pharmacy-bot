import Product from '../models/products'
import CSVService from '../services/CSVService'

export default {
	index(req, res) {
		Product.find({}, (err, products) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(products)
			}
		})
	},

	view(req, res) {
		const { id } = req.params

		Product.findById(id, (err, product) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(product)
			}
		})
	},

	create(req, res) {
		const { body } = req
		const location = JSON.parse(body.location)
		const product = {
			...body,
			location
		}

		Product.create(product, (err, product) => {
			if(err){
				res.status(500).send()
			} else {
				res.status(200).json(product)
			}
		})
	},

	delete(req, res) {
		const { id } = req.params

		Product.findByIdAndRemove(id, (err) => {
			if(err){
				res.status(500).send()
			} else {
				res.status(204).send()
			}
		})
	},

	update(req, res) {
		const { id } = req.params
		const { body } = req

		Product.findByIdAndUpdate(id, { $set: body}, { new: true }, function (err, product) {
			if(err){
				res.status(500).send()
			} else {
				res.status(200).send(product)
			}
		})
	},

	upload(req, res) {
		const parser = new CSVService(req.file.path)

		const onData = (data) => Product.insertMany(data, (err) => {
			if(err) throw err
		})
		const onFinish = () => res.status(204).send()

		parser.parse(onData, onFinish)
	}
}
