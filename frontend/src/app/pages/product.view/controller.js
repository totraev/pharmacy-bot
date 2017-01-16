export default class ProductCtrl {
  constructor($http, $stateParams) {
    this.product = {}

    $http.get(`/api/products/${$stateParams.id}`).then((res) => {
      this.product = res.data
    })
  }
}
