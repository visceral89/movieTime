import { createApp } from "vue";
import router from "./router/index.ts";
import "./variables.css";
import "./style.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
