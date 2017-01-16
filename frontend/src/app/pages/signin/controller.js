export default class SigninCtrl {
  constructor($http, $state) {
    this.$state = $state
    this.$http = $http

    this.form = {
      email: '',
      password: ''
    }
  }

  onSubmit(form) {
    if(form.$invalid) return

    this.$http.post('/api/auth/sign_in', this.form).then((res) => {
      if(res.status == 200){
        localStorage.setItem('jwt', res.data)
        this.$state.go('admin.pharmacy')
      }
    })
  }
}
