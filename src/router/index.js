import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Courses from '@/components/Courses'
import Outdoor from '@/components/Outdoor'
import Cart from '@/components/Cart'
import Dashboard from '@/components/Dashboard'
import DashData from '@/components/pages/DashData'
import Order from '@/components/pages/Order'
import ProductList from '@/components/pages/ProductList'
import Login from '@/components/pages/login'
import OutdoorSea from '@/components/pages/OutdoorSea'
import Cartpage from '@/components/pages/Cartpage'
import Checkoutpage from '@/components/pages/Checkoutpage'

Vue.use(VueRouter)

export default new VueRouter({
    //mode:'history',
    linkActiveClass: 'active',
    routes: [
      {
        name: '首頁',
        path: '/home',
        component: Home,
      },
      {
        name: '課程獨立頁面',
        path: '/courses/:id',
        component: Courses,
      },
      {
        name: '探索山海',
        path: '/outdoor',
        component: Outdoor,
        children: [
          {
            name: '課程列表',
            path: 'outdoorSea',
            component: OutdoorSea,
          },
        ]
      },
      {
        name: '購物車',
        path: '/cart',
        component: Cart,
        children: [
          {
            name: '購物車資訊',
            path: 'cartpage',
            component: Cartpage,
          },
          {
            name: '結帳頁面',
            path: 'checkoutpage/:orderId',
            component: Checkoutpage,
          }
        ]
      },
      {
        name: '登入',
        path: '/login',
        component: Login,
      },
      {
        name: '後台首頁',
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
        children: [
          {
            name: '數據分析',
            path: 'dashData',
            component: DashData,
            meta: { requiresAuth: true }
          },
          {
            name: '訂單管理',
            path: 'order',
            component: Order,
            meta: { requiresAuth: true }
          },
          {
            name: '產品列表',
            path: 'productlist',
            component: ProductList,
            meta: { requiresAuth: true }
          }
        ]
      }
    ]
  })
  