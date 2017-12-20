// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// include jquery
window.$ = window.jQuery = require('jquery')
/* eslint-disable no-new */

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
