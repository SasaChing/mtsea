import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './products'
import cartModules from './cart'
import backgroundModules from './background'

Vue.use(Vuex)

export default new Vuex.Store({
  // 嚴謹模式
  strict: true,
  state: {
    isLoading: false,
    messages: [],
  },
  // 操作行為
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updateMessage(context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATAMESSAGES', { timestamp, message, status });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessages(context, num) {
      context.commit('REMOVEMESSAGES', num);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMESSAGESWITEHTIMING', timestamp);
      }, 3000);
    },
  },
  // 操作狀態
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    UPDATAMESSAGES(state, payload) {
      state.messages.push({
        message: payload.message,
        status: payload.status,
        timestamp: payload.timestamp,
      });
    },
    REMOVEMESSAGES(state, payload) {
      state.messages.splice(payload, 1);
    },
    REMOVEMESSAGESWITEHTIMING(state, payload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1);
        }
      });
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    messages(state) {
      return state.messages;
    },
  },
  modules: {
    productsModules,
    cartModules,
    backgroundModules,
  }
})