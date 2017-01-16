import Pharmacy from '../models/pharmacy'

export default {
	create(req, res) {
		const { email, password, location } = req.body

		Pharmacy.create({email, password, location}, (err, pharmacy) => {
			if(err){
				res.status(500).send(err.message)
			} else {
				res.status(200).json(pharmacy)
			}
		})
	},

  authenticate(req, res) {
    const { email, password } = req.body

    Pharmacy.findOne({email}, (err, pharmacy) => {
      if(err) return res.status(500).send(err.message)
      if(!pharmacy) return res.status(404).send('Pharmacy does not exist')

      pharmacy.comparePassword(password, (err, isMatch) => {
        if(!isMatch) return res.status(403).send('Incorrect password')

        pharmacy.generateToken((err, token) => {
          if(err) return res.status(500).send(err.message)

          res.status(200).send(token)
        })
      })
    })
  }
}
