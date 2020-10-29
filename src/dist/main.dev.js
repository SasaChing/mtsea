"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _vueLoadingOverlay = _interopRequireDefault(require("vue-loading-overlay"));

require("vue-loading-overlay/dist/vue-loading.css");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("bootstrap");

var _currency = _interopRequireDefault(require("./Filters/currency"));

var _data = _interopRequireDefault(require("./Filters/data"));

var _slide = _interopRequireDefault(require("./Filters/slide"));

var _vueScrollto = _interopRequireDefault(require("vue-scrollto"));

var _veeValidate = _interopRequireDefault(require("vee-validate"));

var _vueI18n = _interopRequireDefault(require("vue-i18n"));

var _zh_TW = _interopRequireDefault(require("../node_modules/vee-validate/dist/locale/zh_TW"));

require("./bus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_axios["default"].defaults.withCredentials = true;

_vue["default"].use(_vuex["default"]);

_vue["default"].component('Loading', _vueLoadingOverlay["default"]);

_vue["default"].filter('currency', _currency["default"]);

_vue["default"].filter('date', _data["default"]);

_vue["default"].filter('slide', _slide["default"]); // 錨點滑動


_vue["default"].use(_vueScrollto["default"], {
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
}); // 驗證中文化


_vue["default"].use(_vueI18n["default"]);

var i18n = new _vueI18n["default"]({
  locale: 'zhTW'
});

_vue["default"].use(_veeValidate["default"], {
  events: 'input|blur',
  i18n: i18n,
  dictionary: {
    zhTW: _zh_TW["default"]
  }
}); //router 跳轉回到頁面頂部


_router["default"].afterEach(function (to, from, next) {
  window.scrollTo(0, 0);
});

new _vue["default"]({
  el: '#app',
  components: {
    App: _App["default"]
  },
  template: '<App/>',
  router: _router["default"],
  store: _store["default"],
  i18n: i18n,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');

_router["default"].beforeEach(function (to, from, next) {
  console.log('to', to, 'from', from, 'next', next);

  if (to.meta.requiresAuth) {
    var api = 'https://vue-course-api.hexschool.io/api/user/check';

    _axios["default"].post(api).then(function (response) {
      console.log(response.data);

      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login'
        });
      }
    });

    console.log('需驗證');
  } else {
    next();
  }
});