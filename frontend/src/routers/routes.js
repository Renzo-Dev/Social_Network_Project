const routes = [
    {
        path: '/',
        component: ()=> import('../pages/Home.vue'),
        name: "Home",
        meta: {
            title: 'Fun Talk',
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        component: ()=> import('../pages/Login.vue'),
        name: 'Login',
        meta: {
            title: 'Fun Talk',
        },
    },
    {
        path: '/register',
        component: ()=> import('../pages/Registration.vue'),
        name: 'Register',
        meta: {
            title: 'Fun Talk',
        }
    }
]

export default routes;