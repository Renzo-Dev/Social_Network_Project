import { createRouter , createWebHistory} from "vue-router";
import routes from "./routes";
import {isLoggedIn} from "../services/Authentication";

const router = new createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
);

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    // Проверяем, требует ли маршрут аутентификации
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Если пользователь не аутентифицирован, перенаправляем на страницу входа
        if (!isLoggedIn()) {
            next({
                path: '/login',
                //query: { redirect: to.fullPath } // Сохраняем URL для перенаправления после входа
            });
        } else {
            next(); // Продолжаем навигацию
        }
    } else {
        next(); // Продолжаем навигацию для маршрутов, которые не требуют аутентификации
    }
});

export default router;