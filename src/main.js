import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import vSelect from 'vue-select';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import style from './assets/style/main.scss'

Vue.use(VueNumberInput);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')