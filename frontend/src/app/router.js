import admin from './layouts/admin.pug'
import auth from './layouts/auth.pug'

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider', '$httpProvider', 'jwtOptionsProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider, jwtOptionsProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/pharmacy')

  jwtOptionsProvider.config({
    tokenGetter: () => {
      return localStorage.getItem('jwt')
    },
    unauthenticatedRedirector: ($state) => {
      $state.go('auth.signin');
    }
  })

  $httpProvider.interceptors.push('jwtInterceptor')

  $stateProvider
    .state('admin', {
      abstract: true,
      template: admin,
      data: {
        requiresLogin: true
      }
    })
    .state('auth', {
      abstract: true,
      template: auth
    })
}
