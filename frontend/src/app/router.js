import admin from './layouts/admin.pug'
import auth from './layouts/auth.pug'

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider', '$httpProvider', 'jwtOptionsProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider, jwtOptionsProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')
  jwtOptionsProvider.config({
    whiteListedDomains: ['backend']
  })
  $httpProvider.interceptors.push('jwtInterceptor')

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
