import angular from 'angular'
import tpl from './aside.pug'

const aside = () => {
  return {
    template: tpl,
    restrict: 'E',
    link: function(scope, element) {
      element.addClass('aside');
    }
  }
}

export default angular.module('directive.aside', [])
  .directive('aside', aside)
  .name
