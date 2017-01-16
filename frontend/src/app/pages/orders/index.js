import angular from 'angular'

import OrdersCtrl from './controller'
import tpl from './orders.pug'

export default angular.module('page.orders', [])
  .controller('OrdersCtrl', OrdersCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.orders', {
      url: '/orders',
      template: tpl,
      controller: 'OrdersCtrl',
      controllerAs: 'vm'
    });
  })
  .name
