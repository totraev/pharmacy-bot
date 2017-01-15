import angular from 'angular'

import ProductsCtrl from './controller'
import tpl from './products.pug'

export default angular.module('page.products', [])
  .controller('ProductsCtrl', ProductsCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.products', {
      url: '/products',
      template: tpl,
      controller: 'ProductsCtrl',
      controllerAs: 'products'
    });
  })
  .name
