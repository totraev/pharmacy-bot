export default class OrderCtrl {
  constructor($http, $stateParams) {
    this.default = {
      tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
      maxZoom: 14,
      path: {
          weight: 10,
          color: '#800000',
          opacity: 1
      }
    }

    this.center = {
      lat: 51.505,
      lng: -0.09,
      zoom: 8
    }
    
    this.order = {}

    $http.get(`/api/orders/${$stateParams.id}`).then((res) => {
      this.order = res.data
    })
  }
}
