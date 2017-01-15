import angular from 'angular'

import PharmacyCtrl from './controller'
import tpl from './pharmacy.pug'

export default angular.module('page.pharmacy', [])
  .controller('PharmacyCtrl', PharmacyCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.pharmacy', {
      url: '/pharmacy',
      template: tpl,
      controller: 'PharmacyCtrl',
      controllerAs: 'pharmacy'
    });
  })
  .name
