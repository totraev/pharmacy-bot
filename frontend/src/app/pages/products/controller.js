export default class ProductsCtrl {
  constructor($http) {
    console.log('Hello! Products!')
    $http.get('/api/products').then((products) => console.log(products))
  }
}
