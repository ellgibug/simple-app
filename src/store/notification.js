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

    loader: {
        text: '',
        isVisible: false
    }
};

const getters = {
    notification(state) {
        return state.notification;
    },

    loader(state) {
        return state.loader;
    },
};

const actions = {
    setNotification({ commit }, value) {
        commit('setNotification', value);
    },

    clearNotification({ commit }) {
        commit('clearNotification');
    },

    setLoader({ commit }, value) {
        commit('setLoader', value);
    },

    clearLoader({ commit }) {
        commit('clearLoader');
    },
};

const mutations = {
    setNotification(state, value) {
        state.notification = _cloneDeep(value);
    },

    clearNotification(state) {
        state.notification = {
            type: NOTIFICATION_TYPE.DEFAULT,
            text: '',
            isVisible: false
        };
    },

    setLoader(state, value) {
        state.loader = _cloneDeep(value);
    },

    clearLoader(state) {
        state.loader = {
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
