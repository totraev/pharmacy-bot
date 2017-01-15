const { MONGO_URL } = process.env

export default {
	mongo: {
		host: MONGO_URL || 'mongodb://mongo:27017/pharmacy'
	},
	jwt: {
		algorithm: "HS256",
		expiration: 60,
		secret: "uZrJ!xe*xN?!;oU.u*;QOSM+|=4C?WH?6eWPcK/6AkIXIVGQguSA*r"
	},
}
