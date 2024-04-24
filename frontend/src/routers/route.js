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
    // const isAuthenticated = isLoggedIn();
    //
    // // Проверяем, требует ли маршрут аутентификации
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     // Если пользователь не аутентифицирован, перенаправляем на страницу входа
    //     if (!isAuthenticated) {
    //         next({
    //             path: '/login',
    //             //query: { redirect: to.fullPath } // Сохраняем URL для перенаправления после входа
    //         });
    //     } else {
    //         if (to.name === 'Login' || to.name === 'Register'){
    //             next({ path: '/' });
    //         }
    //         next(); // Продолжаем навигацию
    //     }
    //
    // } else {
    //     next(); // Продолжаем навигацию для маршрутов, которые не требуют аутентификации
    // }

    // проверка маршрутов
    /// если маршрут ( login или register )
    // проверка токена ( если он есть , то переходим в / , если нету то переход на login register )
    /// если маршрут ( который не ( login register ) , но там нужна аутентификация )
    // проверка токена ( если все хорошо , то переход на / , если нет то на /login )
});

export default router;