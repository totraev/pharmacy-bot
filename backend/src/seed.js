import Product from './models/products'
import Order from './models/orders'
import Faker from 'faker'

let products = []

for(let i = 0; i < 1000; i++) {
  products.push({
    name: Faker.commerce.productName(),
    price: Faker.commerce.price(),
    quantityWH: Faker.random.number(1000),
    producer: Faker.company.companyName(),
    location: [Faker.address.latitude(), Faker.address.longitude()],
    pharmacy: '587b8f69dc412302c6bbfd6f'
  })
}

let orders = []

for(let i = 0; i < 1000; i++) {
  orders.push({
    name: Faker.internet.userName(),
    location: [Faker.address.latitude(), Faker.address.longitude()],
    phone: Faker.phone.phoneNumber(),
    products: [],
    pharmacy: '587b8f69dc412302c6bbfd6f'
  })
}

Product.remove({}, (err) => {
  if(err) throw err
  console.log('Products were removed!')

  Product.create(products, (err) => {
    if(err) throw err
    console.log('Products were created!')
  })
})

Order.remove({}, (err) => {
  if(err) throw err
  console.log('Orders were removed!')

  Order.create(orders, (err) => {
    if(err) throw err
    console.log('Orders were created!')
  })
})
