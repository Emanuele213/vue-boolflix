import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faStar, regularStar, faSpinner);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
