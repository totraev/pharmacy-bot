import angular from 'angular'

import ProductCtrl from './controller'
import tpl from './product.pug'

export default angular.module('page.product', [])
  .controller('ProductCtrl', ProductCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.product', {
      url: '/products/:id',
      template: tpl,
      controller: 'ProductCtrl',
      controllerAs: 'vm'
    });
  })
  .name
