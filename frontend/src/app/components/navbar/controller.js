import angular from 'angular'

export default class NavbarController {
  constructor($state) {
    this.$state = $state
  }

  toggleAside(){
    let body = angular.element(document).find('body');

    if(body.hasClass('sidebar-collapse')){
      body.removeClass('sidebar-collapse');
    } else {
      body.addClass('sidebar-collapse');
    }
  }

  signout(){
    localStorage.removeItem('jwt')
    this.$state.go('auth.signin')
  }
}
