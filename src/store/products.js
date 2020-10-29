import axios from 'axios';
import $ from 'jquery';

export default ({
    // state 屬於模組區域變數
    // actions, mutations, getters 屬於全域變數
    namespaced: true, // actions, mutations, getters 變成區域變數
    strict: true,
    state: {
        products: [],
        categories: [],
        product: {},
        pagination: {},
    },
    // 操作行為
    actions: {
        getProducts(context, page) {
            context.commit('LOADING', true, { root: true });
            const api = `https://vue-course-api.hexschool.io/api/sasa/products?page=${page}`;
            axios.get(api).then((response) => {
                context.commit('PRODUCTS', response.data.products);
                context.commit('CATEGORIES', response.data.products);
                context.commit('PAGINATION', response.data.pagination);
                console.log('取得產品列表', response.data);
                context.commit('LOADING', false, { root: true });
            });
        },
        getProduct(context, id) {
            const api = `https://vue-course-api.hexschool.io/api/sasa/product/${id}`;
            context.commit('LOADING', true, { root: true });
            axios.get(api).then(response => {
                context.commit('PRODUCT', response.data.product);
                $("#productModal").modal("show");
                console.log(response);
                context.commit('LOADING', false, { root: true });
            });
        },
    },
    // 操作狀態
    mutations: {
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PRODUCT(state, payload) {
            state.product = payload;
        },
        CATEGORIES(state, payload) {
            const categories = new Set();
            payload.forEach((item) => {
                categories.add(item.category);
            });
            state.categories = Array.from(categories);
        },
        PAGINATION(state, payload) {
            state.pagination = payload;
        },
        
    },
    getters: {
        products: state => state.products,
        product: state => state.product,
        categories: state => state.categories,
        pagination: state => state.pagination,
    }
});