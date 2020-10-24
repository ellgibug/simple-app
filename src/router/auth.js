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
    {
        path: '/register',
        name: 'Register',
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: 'auth/index',
            title: 'Register'
        },
        component: function () {
            return import('../views/auth/register/index')
        }
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: 'auth/index',
            title: 'Forgot Password'
        },
        component: function () {
            return import('../views/auth/forgotPassword/index')
        }
    },
    {
        path: '/restore-password',
        name: 'RestorePassword',
        beforeEnter: ifNotAuthenticated,
        meta: {
            layout: 'auth/index',
            title: 'Restore Password'
        },
        component: function () {
            return import('../views/auth/restorePassword/index')
        }
    },
]