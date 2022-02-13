import _cloneDeep from "lodash/cloneDeep"

export const NOTIFICATION_TYPE = {
    SUCCESS: 'success',
    ERROR: 'error',
    DEFAULT: 'default',
}

const state = {
    notification: {
        type: NOTIFICATION_TYPE.DEFAULT,
        text: '',
        isVisible: false
    },
};

const getters = {
    notification(state) {
        return state.notification;
    },
};

const actions = {
    setNotification({ commit }, value) {
        console.log('v', value)
        commit('setNotification', value);
    },

    clearNotification({ commit }) {
        commit('clearNotification');
    },
};

const mutations = {
    setNotification(state, value) {
        console.log(_cloneDeep(value))
        state.notification = _cloneDeep(value);
    },

    clearNotification(state) {
        state.notification = {
            type: NOTIFICATION_TYPE.DEFAULT,
            text: '',
            isVisible: false
        };
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
