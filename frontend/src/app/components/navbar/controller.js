import angular from 'angular'

export default class NavbarController {
  toggleAside(){
    let body = angular.element(document).find('body');

    if(body.hasClass('sidebar-collapse')){
      body.removeClass('sidebar-collapse');
    } else {
      body.addClass('sidebar-collapse');
    }
  }
}
