import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Registration
    }
]

export default routes;