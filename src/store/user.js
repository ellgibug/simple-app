import _cloneDeep from "lodash/cloneDeep"

const state = {
    user: {},
    isAuthed: false,
    token: '',
};

const getters = {
    user(state) {
        return state.user;
    },
    isAuthed(state) {
        return state.isAuthed;
    },
    token(state) {
        return state.token;
    }
};

const actions = {
    setUser({ commit }, value) {
        commit('setUser', value);
    },
    setIsAuthed({ commit }, value) {
        console.log(value)
        commit('setIsAuthed', value);
    },
    setToken({ commit }, value) {
        commit('setToken', value);
    },
};

const mutations = {
    setUser(state, value) {
        state.user = _cloneDeep(value);
    },
    setIsAuthed(state, value) {
        console.log(123, value)
        state.isAuthed = value;
    },
    setToken(state, value) {
        state.token = value;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
