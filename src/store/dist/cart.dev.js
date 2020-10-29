"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  strict: true,
  state: {
    cart: {
      carts: {}
    }
  },
  // 操作行為
  actions: {
    getCart: function getCart(context) {
      context.commit('LOADING', true, {
        root: true
      });
      var api = "https://vue-course-api.hexschool.io/api/sasa/cart";

      _axios["default"].get(api).then(function (response) {
        context.commit('CART', response.data.data);
        console.log(response);
        context.commit('LOADING', false, {
          root: true
        });
      });
    },
    removeCartItem: function removeCartItem(context, id) {
      var api = "https://vue-course-api.hexschool.io/api/sasa/cart/".concat(id);
      context.commit('LOADING', true, {
        root: true
      });

      _axios["default"]["delete"](api).then(function () {
        context.dispatch('getCart');
        context.commit('LOADING', false, {
          root: true
        });
      });
    },
    addtoCart: function addtoCart(context, _ref) {
      var id = _ref.id,
          qty = _ref.qty;
      var api = "https://vue-course-api.hexschool.io/api/sasa/cart";
      context.commit('LOADING', true, {
        root: true
      });
      var cart = {
        product_id: id,
        qty: qty
      };

      _axios["default"].post(api, {
        data: cart
      }).then(function (response) {
        console.log(response);
        context.commit('LOADING', false, {
          root: true
        });
        context.dispatch('getCart');
        (0, _jquery["default"])("#productModal").modal("hide");
      });
    }
  },
  // 操作狀態
  mutations: {
    CART: function CART(state, payload) {
      state.cart = payload;
    }
  },
  getters: {
    cart: function cart(state) {
      return state.cart;
    }
  }
};
exports["default"] = _default;