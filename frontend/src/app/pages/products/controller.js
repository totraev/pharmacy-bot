export default class ProductsCtrl {
  constructor($http, $state) {
    this.$state = $state
    this.products = []
    this.pager = {
      currentPage: 1,
      totalItems: 0,
      maxSize: 5,
      products: []
    }

    $http.get('/api/products').then((res) => {
      console.log(res.data)
      this.products = res.data
      this.pager.totalItems = res.data.length

      this.currentProducts()
    })
  }

  pageChanged() {
    this.currentProducts()
  }

  currentProducts() {
    const start = (this.pager.currentPage - 1) * 10
    const end = start + 10

    this.pager.products = this.products.slice(start, end)
  }

  goTo(id) {
    this.$state.go('admin.product', { id })
  }
}
