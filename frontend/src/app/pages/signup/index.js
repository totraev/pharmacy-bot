import angular from 'angular'
import match from 'angular-validation-match'

import SignupCtrl from './controller'
import tpl from './signup.pug'

export default angular.module('page.signup', [match])
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
