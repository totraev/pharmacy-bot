import angular from 'angular'
import tpl from './footer.pug'

const footer = () => {
  return {
    template: tpl,
    restrict: 'E',
    link: function(scope, element) {
      element.addClass('main-footer');
    }
  }
}

export default angular.module('directive.footer', [])
  .directive('footer', footer)
  .name
