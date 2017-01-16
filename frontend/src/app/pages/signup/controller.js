export default class SignupCtrl {
  constructor($http, $location) {
    this.$http = $http
    this.$location = $location
    this.form = {
      email: '',
      password: '',
      password_confirm: ''
    }
    this.errorMsg = ''
  }

  onSubmit(form) {
    if(form.$invalid) return

    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      const { email, password } = this.form
      const data = {
        email,
        password,
        location: [latitude, longitude]
      }

      this.$http.post('/api/auth/sign_up', data)
        .then(() => this.$location.path('/signin'))
        .catch((res) => this.errorMsg = res.data)
    })
  }
}
