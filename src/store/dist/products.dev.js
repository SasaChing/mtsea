"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  // state 屬於模組區域變數
  // actions, mutations, getters 屬於全域變數
  namespaced: true,
  // actions, mutations, getters 變成區域變數
  strict: true,
  state: {
    products: [],
    product: {}
  },
  // 操作行為
  actions: {
    getProducts: function getProducts(context) {
      context.commit('LOADING', true, {
        root: true
      });
      var api = "https://vue-course-api.hexschool.io/api/sasa/products";

      _axios["default"].get(api).then(function (response) {
        context.commit('PRODUCTS', response.data.products);
        console.log(response.data);
        context.commit('LOADING', false, {
          root: true
        });
      });
    },
    getProduct: function getProduct(context, id) {
      var api = "https://vue-course-api.hexschool.io/api/sasa/product/".concat(id);
      context.commit('LOADING', true, {
        root: true
      });

      _axios["default"].get(api).then(function (response) {
        context.commit('PRODUCT', response.data.product);
        (0, _jquery["default"])("#productModal").modal("show");
        console.log(response);
        context.commit('LOADING', false, {
          root: true
        });
      });
    }
  },
  // 操作狀態
  mutations: {
    PRODUCTS: function PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCT: function PRODUCT(state, payload) {
      state.product = payload;
    }
  },
  getters: {
    products: function products(state) {
      return state.products;
    },
    product: function product(state) {
      return state.product;
    }
  }
};
exports["default"] = _default;