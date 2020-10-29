import axios from 'axios';
import $ from 'jquery';

export default {
  // 嚴謹模式
  strict: true,
  namespaced: true, 
  state: {
    cart: {},
    coupon_code: "",
  },
  // 操作行為
  actions: {
    getCart(context) {
      context.commit('LOADING', true, { root:true });
      const api = "https://vue-course-api.hexschool.io/api/sasa/cart";
      axios.get(api).then(response => {
        context.commit('CART', response.data.data);
        console.log(response);
        context.commit('LOADING', false, { root:true });
      });
    },
    removeCartItem(context, id) {
      const api = `https://vue-course-api.hexschool.io/api/sasa/cart/${id}`;
      context.commit('LOADING', true, { root:true });
      axios.delete(api).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false, { root:true });
      });
    },
    addtoCart(context, { id, qty }) {
      const api = `https://vue-course-api.hexschool.io/api/sasa/cart`;
      context.commit('LOADING', true, { root:true });
      const cart = {
        product_id: id,
        qty
      };
      axios.post(api, { data: cart }).then(response => {
        console.log(response);
        context.commit('LOADING', false, { root:true });
        context.dispatch('getCart');
        $("#productModal").modal("hide");
        context.dispatch('updateMessage', { message: '成功加入購物車', status: 'success' }, { root: true });
      });
    },
    addCouponCode() {
      const api = `https://vue-course-api.hexschool.io/api/sasa/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      context.commit('LOADING', true, { root:true });
      axios.post(api, { data: coupon }).then(response => {
        console.log(response);
        context.dispatch('getCart');
        context.commit('LOADING', false, { root:true });
      });
    },
  },
  // 操作狀態
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    COUPONCODE(state, payload) {
      state.coupon_code = payload;
    },
  },
  getters: {
    cart: state => state.cart,
    coupon_code: state  => state.coupon_code,
  }
}