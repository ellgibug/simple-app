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
    {
        path: '/profile',
        name: 'Profile',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'Profile'
        },
        component: function () {
            return import('../views/inside/profile/index')
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'Projects'
        },
        component: function () {
            return import('../views/inside/projects/index')
        }
    },
    {
        path: '/projects/:code',
        name: 'Project',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'Project'
        },
        component: function () {
            return import('../views/inside/project/index')
        }
    },
    {
        path: '/projects/:code/new-page',
        name: 'NewPage',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'NewPage'
        },
        component: function () {
            return import('../views/inside/newPage/index')
        }
    },
    {
        path: '/pages/:code',
        name: 'Page',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'Page'
        },
        component: function () {
            return import('../views/inside/page/index')
        }
    },
    {
        path: '/organization/users',
        name: 'UsersInOrganization',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'inside/index',
            title: 'Users In Organization'
        },
        component: function () {
            return import('../views/inside/usersInOrganization/index')
        }
    },
]