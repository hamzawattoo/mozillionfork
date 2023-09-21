import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/route.js";
createApp(App).use(router).mount("#app");

// import { createApp } from "vue";
// import VueCarousel from "@chenfengyuan/vue-carousel";

// const app = createApp({});

// app.mount("#app");

// app.component(VueCarousel.name, VueCarousel);
