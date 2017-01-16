import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'

import map from './routes/map'
import pharmacy from './routes/pharmacy'
import products from './routes/products'
import orders from './routes/orders'
import auth from './routes/auth'

import config from './config'

const app = express()

const { secret } = config.jwt
const authenticate = jwt({secret})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/map', authenticate, map)
app.use('/pharmacy', authenticate, pharmacy)
app.use('/products', authenticate, products)
app.use('/orders', authenticate, orders)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  } else {
    next(err)
  }
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(res.locals)
})

export default app
