import angular from 'angular'

import SignupCtrl from './controller'
import tpl from './signup.pug'

export default angular.module('page.signup', [])
  .controller('SignupCtrl', SignupCtrl)
  .config(($stateProvider) => {
    $stateProvider.state('auth.signup', {
      url: '/signup',
      template: tpl,
      controller: 'SignupCtrl',
      controllerAs: 'signup'
    });
  })
  .name
