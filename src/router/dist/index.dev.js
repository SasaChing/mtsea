"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("@/components/Home"));

var _Courses = _interopRequireDefault(require("@/components/Courses"));

var _Outdoor = _interopRequireDefault(require("@/components/Outdoor"));

var _Cart = _interopRequireDefault(require("@/components/Cart"));

var _Dashboard = _interopRequireDefault(require("@/components/Dashboard"));

var _DashData = _interopRequireDefault(require("@/components/pages/DashData"));

var _Order = _interopRequireDefault(require("@/components/pages/Order"));

var _ProductList = _interopRequireDefault(require("@/components/pages/ProductList"));

var _login = _interopRequireDefault(require("@/components/pages/login"));

var _OutdoorSea = _interopRequireDefault(require("@/components/pages/OutdoorSea"));

var _OutdoorMount = _interopRequireDefault(require("@/components/pages/OutdoorMount"));

var _Cartpage = _interopRequireDefault(require("@/components/pages/Cartpage"));

var _Checkoutpage = _interopRequireDefault(require("@/components/pages/Checkoutpage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    name: '首頁',
    path: '/home',
    component: _Home["default"]
  }, {
    name: '課程獨立頁面',
    path: '/courses/:id',
    component: _Courses["default"]
  }, {
    name: '探索山海',
    path: '/outdoor',
    component: _Outdoor["default"],
    children: [{
      name: '住海上',
      path: 'outdoorSea',
      component: _OutdoorSea["default"]
    }, {
      name: '住山上',
      path: 'outdoorMount',
      component: _OutdoorMount["default"]
    }]
  }, {
    name: '購物車',
    path: '/cart',
    component: _Cart["default"],
    children: [{
      name: '購物車資訊',
      path: 'cartpage',
      component: _Cartpage["default"]
    }, {
      name: '結帳頁面',
      path: 'checkoutpage/:orderId',
      component: _Checkoutpage["default"]
    }]
  }, {
    name: '登入',
    path: '/login',
    component: _login["default"]
  }, {
    name: '後台首頁',
    path: '/dashboard',
    component: _Dashboard["default"],
    meta: {
      requiresAuth: true
    },
    children: [{
      name: '數據分析',
      path: 'dashData',
      component: _DashData["default"],
      meta: {
        requiresAuth: true
      }
    }, {
      name: '訂單管理',
      path: 'order',
      component: _Order["default"],
      meta: {
        requiresAuth: true
      }
    }, {
      name: '產品列表',
      path: 'productlist',
      component: _ProductList["default"],
      meta: {
        requiresAuth: true
      }
    }]
  }]
});

exports["default"] = _default;