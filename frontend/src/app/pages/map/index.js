import angular from 'angular'

import MapCtrl from './controller'
import tpl from './map.pug'

export default angular.module('page.map', [])
  .controller('MapCtrl', MapCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('admin.map', {
      url: '/map',
      template: tpl,
      controller: 'MapCtrl',
      controllerAs: 'map'
    });
  })
  .name
