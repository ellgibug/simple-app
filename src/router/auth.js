import {store} from "../store";

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['user/isAuthed']) {
        next();
        return;
    }
    next("/dashboard");
};

export const auth = [
    {
        path: '/login',
        name: 'Login',
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: 'auth/index',
            title: 'Login'
        },
        component: function () {
            return import('../views/auth/login/index')
        }
    },
]