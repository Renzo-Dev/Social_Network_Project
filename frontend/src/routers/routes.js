import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: "Home",
        meta: {
            title: 'Home',
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/register',
        component: Registration,
        name: 'Register',
        meta: {
            title: 'Registration',
        }
    }
]

export default routes;