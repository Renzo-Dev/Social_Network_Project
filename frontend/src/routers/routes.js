const routes = [
    {
        path: '/',
        component: ()=> import('../pages/Home.vue'),
        name: "Home",
        meta: {
            title: 'Home',
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        component: ()=> import('../pages/Login.vue'),
        name: 'Login',
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/register',
        component: ()=> import('../pages/Registration.vue'),
        name: 'Register',
        meta: {
            title: 'Registration',
        }
    }
]

export default routes;