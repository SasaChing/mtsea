
import axios from 'axios';
import $ from 'jquery';

export default {
    strict: true,
    namespaced: true,
    state: {
        pagination: {},
        tempProduct: {},
        orders: [],
        products: [],
        isNew: false,
        product: {},
    },
    actions: {
        getProducts(context, page) {
            context.commit('LOADING', true, { root: true });
            const api = `https://vue-course-api.hexschool.io/api/sasa/products?page=${page}`;
            axios.get(api).then((response) => {
                context.commit('PRODUCTS', response.data.products);
                context.commit('PAGINATION', response.data.pagination);
                console.log('取得產品列表', response.data);
                context.commit('LOADING', false, { root: true });
            });
        },
        getOrderlist(context, page) {
            const api = `https://vue-course-api.hexschool.io/api/sasa/admin/orders?page=${page}`;
            context.commit('LOADING', true, { root: true });
            axios.get(api, context.state.tempProduct).then(response => {
                console.log(response.data);
                context.commit('ORDERS', response.data.orders);
                context.commit('PAGINATION', response.data.pagination);
                context.commit('LOADING', false, { root: true });
            });
        },
        openOrdertModal(context, item) {
            context.commit('TEMPRODUCT', Object.assign({}, item));
            $("#delOrdertModal").modal("show");
        },
        delOrder(context) {
            const api = `https://vue-course-api.hexschool.io/api/sasa/admin/orders/${context.state.tempProduct.id}`;
            context.commit('LOADING', true, { root: true });
            axios.delete(api).then(response => {
                console.log(response);
                context.commit('LOADING', false, { root: true });
                context.dispatch('getOrderlist');
            });
        }
    },
    mutations: {
        ORDERS(state, payload) {
            state.orders = payload;
        },
        PAGINATION(state, payload) {
            state.pagination = payload;
        },
        TEMPRODUCT(state, payload) {
            state.tempProduct = payload;
        },
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        ISNEW(state, payload) {
            state.products = payload;
        },
        PRODUCT(state, payload) {
            state.product = payload;
        },

    },
    getters: {
        orders(state) {
            return state.orders
        },
        pagination(state) {
            return state.pagination
        },
        tempProduct(state) {
            return state.tempProduct
        },
        products(state) {
            return state.products
        },
        isNew(state) {
            return state.isNew
        },
        product(state) {
            return state.product
        },
    }
}