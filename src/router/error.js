export const errors = [
    {
        path: '*',
        name: 'PageNotFound',
        meta: {
            layout: 'error/index',
            title: 'PageNotFound'
        },
        component: function () {
            return import('../views/error/error404/index')
        }
    },
]