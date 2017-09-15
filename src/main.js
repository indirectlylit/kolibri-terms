import Vue from 'vue'
import VueFire from 'vuefire'

import App from './App.vue'

import purecss from 'purecss'
import purecssGrids from 'purecss/build/grids-responsive-min.css'

Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App)
})
