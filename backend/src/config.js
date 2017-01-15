const { MONGO_URL } = process.env

export default {
	mongo: {
		host: MONGO_URL || 'mongodb://mongo:27017/pharmacy'
	}
}
