import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store';
import APIService from './services/api.service';

APIService.init(process.env.VUE_APP_ROOT_API)
Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  vuetify,
  router,
    store,
  render: h => h(App)
}).$mount('#app')


