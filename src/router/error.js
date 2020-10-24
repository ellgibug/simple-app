export const errors = [
    {
        path: '*',
        name: 'PageNotFound',
        meta: {
            layout: 'errors/index',
            title: 'PageNotFound'
        },
        component: function () {
            return import('../views/error/error404/index')
        }
    },
]