import angular from 'angular'

import ProductCreateCtrl from './controller'
import tpl from './product.pug'

export default angular.module('page.productcreate', [])
  .controller('ProductCreateCtrl', ProductCreateCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.productcreate', {
      url: '/product/create',
      template: tpl,
      controller: 'ProductCreateCtrl',
      controllerAs: 'vm'
    });
  })
  .name
