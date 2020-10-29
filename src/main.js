import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import CurrencyFilter from "./Filters/currency";
import DateFilter from "./Filters/data";
import SlideFilter from "./Filters/slide";
import VueScrollto from "vue-scrollto";
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zhTW from '../node_modules/vee-validate/dist/locale/zh_TW';
import './bus';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
Vue.use(Vuex)

Vue.component('Loading', Loading);
Vue.filter('currency', CurrencyFilter);
Vue.filter('date', DateFilter);
Vue.filter('slide', SlideFilter);

// 錨點滑動
Vue.use(VueScrollto,{
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// 驗證中文化
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW
  }
});

//router 跳轉回到頁面頂部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) {
    const api = 'https://vue-course-api.hexschool.io/api/user/check'
      axios.post(api).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          next();
        } else {
          next({
            path:'/login'
          });
        }
      });
    console.log('需驗證');
  } else {
    next();
  }
});
