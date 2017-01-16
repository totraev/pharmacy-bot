import angular from 'angular'

import OrderCtrl from './controller'
import tpl from './order.pug'

export default angular.module('page.order', [])
  .controller('OrderCtrl', OrderCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.order', {
      url: '/orders/:id',
      template: tpl,
      controller: 'OrderCtrl',
      controllerAs: 'vm'
    });
  })
  .name
