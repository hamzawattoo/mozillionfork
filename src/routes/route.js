import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Home from "../views/Home.vue";
import MakeOffer from "../views/MakeOffer.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/make-offer",
      name: "MakeOffer",
      component: MakeOffer,
    },
  ],
});

export default router;
