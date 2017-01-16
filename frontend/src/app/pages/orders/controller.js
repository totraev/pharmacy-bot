export default class OrdersCtrl {
  constructor($http, $state) {
    this.$state = $state
    this.orders = []
    this.pager = {
      currentPage: 1,
      totalItems: 0,
      maxSize: 5,
      orders: []
    }

    $http.get('/api/orders').then((res) => {
      this.orders = res.data
      this.pager.totalItems = res.data.length
      console.log(res.data)
      this.currentProducts()
    })
  }

  pageChanged() {
    this.currentProducts()
  }

  currentProducts() {
    const start = (this.pager.currentPage - 1) * 10
    const end = start + 10

    this.pager.orders = this.orders.slice(start, end)
  }

  goTo(id) {
    this.$state.go('admin.order', { id })
  }
}
