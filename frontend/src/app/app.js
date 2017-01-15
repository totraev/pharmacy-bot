import angular from 'angular';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'
import '../vendor/lte/css/AdminLTE.min.css'
import '../vendor/lte/css/skins/skin-blue.min.css'
//map
import '../../node_modules/leaflet/dist/leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'
import '../../node_modules/ui-leaflet/dist/ui-leaflet'
import '../../node_modules/angular-simple-logger/dist'

import uirouter from 'angular-ui-router'
import angularJWT from 'angular-jwt'
import router from './router'
import aside from './components/aside'
import navbar from './components/navbar'
import footer from './components/footer'

import pharmacy from './pages/pharmacy'
import products from './pages/products'
import map from './pages/map'
import orders from './pages/orders'
import signin from './pages/signin'
import signup from './pages/signup'

export const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, [
  uirouter,
  navbar,
  aside,
  footer,
  pharmacy,
  products,
  map,
  orders,
  signin,
  signup,
  'nemLogging',
  'ui-leaflet',
  angularJWT
])
  .config(router)
