import Order from '../models/orders'

export default {
	index(req, res) {
		Order.find({}, (err, orders) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(orders)
			}
		})
	},

	view(req, res) {
		const { id } = req.params

		Order.findById(id, (err, order) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(order)
			}
		})
	}
}
