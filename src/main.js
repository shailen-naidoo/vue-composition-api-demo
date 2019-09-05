// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
