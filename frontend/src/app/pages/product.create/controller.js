export default class ProductCreateCtrl {
  constructor($http, jwtHelper, $state) {
    this.$http = $http
    this.$state = $state
    this.errMsg = ''

    const {id, location} = jwtHelper.decodeToken(localStorage.getItem('jwt'))

    this.product = {
      name: '',
      price: '',
      quantityWH: '',
      producer: '',
      location,
      pharmacy: id
    }
  }

  onSubmit(form) {
    if(form.$invalid) return

    this.$http.post('/api/products', this.product)
      .then(() => this.$state.go('admin.products'))
      .catch((res) => this.errMsg = res.data)
  }
}
