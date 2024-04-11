import { createRouter , createWebHistory} from "vue-router";
import routes from "./routes";

const router = new createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
);


export default router;