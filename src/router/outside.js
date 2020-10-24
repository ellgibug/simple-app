export const outside = [
    {
        path: '/',
        name: 'Landing',
        component: function () {
            return import('../views/outside/landing/index.vue')
        },
        meta: {
            layout: 'outside/index',
            title: 'Landing'
        }
    },
]