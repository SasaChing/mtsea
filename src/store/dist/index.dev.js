"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  // 嚴謹模式
  strict: true,
  state: {
    isLoading: false,
    products: [],
    categories: [],
    cart: {}
  },
  // 操作行為
  actions: {
    updateLoading: function updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProducts: function getProducts(context) {
      context.commit('LOADING', true);
      var api = "https://vue-course-api.hexschool.io/api/sasa/products";

      _axios["default"].get(api).then(function (response) {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        console.log(response.data);
        context.commit('LOADING', false);
      });
    },
    getCart: function getCart(context) {
      context.commit('LOADING', true);
      var api = "https://vue-course-api.hexschool.io/api/sasa/cart";

      _axios["default"].get(api).then(function (response) {
        context.commit('CART', response.data.data);
        console.log(response);
        context.commit('LOADING', false);
      });
    },
    removeCartItem: function removeCartItem(context, id) {
      var api = "https://vue-course-api.hexschool.io/api/sasa/cart/".concat(id);
      context.commit('LOADING', true);

      _axios["default"]["delete"](api).then(function () {
        context.dispatch('getCart');
        context.commit('LOADING', false);
      });
    },
    addtoCart: function addtoCart(context, _ref) {
      var id = _ref.id,
          qty = _ref.qty;
      var api = "https://vue-course-api.hexschool.io/api/sasa/cart";
      context.commit('LOADING', true);
      var cart = {
        product_id: id,
        qty: qty
      };

      _axios["default"].post(api, {
        data: cart
      }).then(function (response) {
        console.log(response);
        context.commit('LOADING', false);
        context.dispatch('getCart');
      });
    }
  },
  // 操作狀態
  mutations: {
    LOADING: function LOADING(state, status) {
      state.isLoading = status;
    },
    PRODUCTS: function PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES: function CATEGORIES(state, payload) {
      var categories = new Set();
      payload.forEach(function (item) {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    CART: function CART(state, payload) {
      state.cart = payload;
    }
  },
  getters: {
    isLoading: function isLoading(state) {
      return state.isLoading;
    },
    categories: function categories(state) {
      return state.categories;
    },
    products: function products(state) {
      return state.products;
    },
    cart: function cart(state) {
      return state.cart;
    }
  }
});

exports["default"] = _default;