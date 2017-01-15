import express from 'express'
import bodyParser from 'body-parser'

import map from './routes/map'
import pharmacy from './routes/pharmacy'
import products from './routes/products'
import orders from './routes/orders'
import config from './config'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/map', map)
app.use('/pharmacy', pharmacy)
app.use('/products', products)
app.use('/orders', orders)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
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
