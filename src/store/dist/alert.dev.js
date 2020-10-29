"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  strict: true,
  namespaced: true,
  state: {
    messages: []
  },
  actions: {
    updateMessage: function updateMessage(context, _ref) {
      var message = _ref.message,
          status = _ref.status;
      var timestamp = Math.floor(new Date() / 1000);
      context.commit('UPDATAMESSAGES', {
        timestamp: timestamp,
        message: message,
        status: status
      });
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessages: function removeMessages(context, num) {
      context.commit('REMOVEMESSAGES', num);
    },
    removeMessageWithTiming: function removeMessageWithTiming(context, timestamp) {
      setTimeout(function () {
        context.commit('REMOVEMESSAGESWITEHTIMING', timestamp);
      }, 3000);
    }
  },
  mutations: {
    UPDATAMESSAGES: function UPDATAMESSAGES(state, payload) {
      state.messages.push({
        message: payload.message,
        status: payload.status,
        timestamp: payload.timestamp
      });
    },
    REMOVEMESSAGES: function REMOVEMESSAGES(state, payload) {
      state.messages.splice(payload, 1);
    },
    REMOVEMESSAGESWITEHTIMING: function REMOVEMESSAGESWITEHTIMING(state, payload) {
      state.messages.forEach(function (item, i) {
        if (item.timestamp === payload) {
          state.messages.splice(i, 1);
        }
      });
    }
  },
  getters: {
    messages: function messages(state) {
      return state.messages;
    }
  }
};
exports["default"] = _default;