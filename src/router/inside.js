import {store} from "../store";
import axios from "axios";

const ifAuthenticated = (to, from, next) => {
    if (store.getters['user/isAuthed']) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters['user/token']}`;
        next();
        return;
    }
    next("/login");
};


export const inside = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'Dashboard'
        },
        component: function () {
            return import('../views/inside/dashboard/index')
        }
    },
]