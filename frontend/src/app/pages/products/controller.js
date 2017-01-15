export default class ProductsCtrl {
  constructor($http) {
    console.log('Hello! Products!')
    $http.get('/products').then((products) => console.log(products))
  }
}
