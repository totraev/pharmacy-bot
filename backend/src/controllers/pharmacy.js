import Pharmacy from '../models/pharmacy'

export default {
	index(req, res) {
		const { id } = req.user
		
		Pharmacy.findById(id, (err, pharmacy) => {
			if(err){
				res.status(500).send(err.message)
			} else {
				res.status(200).send(pharmacy)
			}
		})
	}
}
