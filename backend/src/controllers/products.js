import Product from '../models/products'
import CSVService from '../services/CSVService'

export default {
	index(req, res) {
		const { id: pharmacy } = req.user

		Product.find({pharmacy}, (err, products) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(products)
			}
		})
	},

	view(req, res) {
		const { id: pharmacy } = req.user
		const { id: _id } = req.params

		Product.findOne({_id, pharmacy}, (err, product) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(product)
			}
		})
	},

	create(req, res) {
		const { body, user: { id: pharmacy } } = req

		const product = {
			...body,
			pharmacy
		}

		Product.create(product, (err, product) => {
			if(err){
				res.status(500).send(err.message)
			} else {
				res.status(200).json(product)
			}
		})
	},

	delete(req, res) {
		const { id: _id } = req.params
		const { id: pharmacy } = req.user

		Product.findOneAndRemove({_id, pharmacy}, (err, result) => {
			if(err){
				res.status(500).send()
			} else {
				res.status(200).send(result)
			}
		})
	},

	update(req, res) {
		const { id: _id } = req.params
		const { body, user: { id: pharmacy } } = req

		Product.findOneAndUpdate({_id, pharmacy}, { $set: body}, { new: true }, function (err, product) {
			if(err){
				res.status(500).send()
			} else {
				res.status(200).send(product)
			}
		})
	},

	// TODO: add pharmacy id, refactor service
	upload(req, res) {
		const parser = new CSVService(req.file.path)

		const onData = (data) => Product.insertMany(data, (err) => {
			if(err) throw err
		})
		const onFinish = () => res.status(204).send()

		parser.parse(onData, onFinish)
	}
}
