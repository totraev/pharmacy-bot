import Order from '../models/orders'

export default {
	index(req, res) {
		const {id: pharmacy} = req.user

		Order.find({pharmacy}, (err, orders) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(orders)
			}
		})
	},

	view(req, res) {
		const { id: _id } = req.params
		const { id: pharmacy } = req.user

		Order.findOne({_id, pharmacy}, (err, order) => {
			if(err) {
				res.status(500).send()
			} else {
				res.status(200).json(order)
			}
		})
	}
}
