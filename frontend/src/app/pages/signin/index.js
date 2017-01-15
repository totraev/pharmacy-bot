import angular from 'angular'

import SigninCtrl from './controller'
import tpl from './signin.pug'

export default angular.module('page.signin', [])
  .controller('SigninCtrl', SigninCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('auth.signin', {
      url: '/signin',
      template: tpl,
      controller: 'SigninCtrl',
      controllerAs: 'signin'
    });
  })
  .name
