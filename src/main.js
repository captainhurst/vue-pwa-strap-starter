// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import uploader from 'vue-simple-uploader'
import VueVideoPlayer from 'vue-video-player'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFormGenerator from 'vue-form-generator'

let hostname = 'loudmouth.com'
let port = '4000'
var instance = axios.create({
  baseURL: `http://${hostname}${port ? ':' + port : ''}/api/v1`,
  timeout: 10000,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

import App from './App'
import store from './store/store'
import router from './router'


Vue.use(VueAxios, instance)
Vue.use(VueFormGenerator)

Vue.config.productionTip = false

// include jquery
window.$ = window.jQuery = require('jquery')
/* eslint-disable no-new */

Vue.use(BootstrapVue)
Vue.use(uploader)
Vue.use(VueVideoPlayer)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
