import admin from './layouts/admin.pug'
import auth from './layouts/auth.pug'

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('admin', {
      abstract: true,
      template: admin
    })
    .state('auth', {
      abstract: true,
      template: auth
    })
}
