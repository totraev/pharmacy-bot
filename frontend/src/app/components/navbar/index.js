import angular from 'angular'
import tpl from './navbar.pug'
import NavbarController from './controller'

const navbar = () => {
  return {
    template: tpl,
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }
}

export default angular.module('directive.navbar', [])
  .controller('NavbarController', NavbarController)
  .directive('navbar', navbar)
  .name
