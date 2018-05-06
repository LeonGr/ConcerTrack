//This file is part of ConcerTrack.
//
//    ConcerTrack is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    ConcerTrack is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with ConcerTrack.  If not, see <http://www.gnu.org/licenses/>.

import Vue from 'vue'
import App from './app'
import router from './router'
import AutoComplete from './components/autocomplete.vue'

Vue.config.productionTip = false

// Load component to use <autocomplete> in other components
Vue.component('autocomplete', AutoComplete)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
