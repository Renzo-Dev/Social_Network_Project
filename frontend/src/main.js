import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/route";

createApp(App).use(router).mount("#app");