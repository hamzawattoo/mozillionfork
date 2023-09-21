import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Home from "../views/Home.vue";
import MakeOffer from "../views/MakeOffer.vue";
import BuyPhones from "../views/BuyPhones.vue";
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
    {
      path: "/buy-phones",
      name: "BuyPhones",
      component: BuyPhones,
    },
  ],
});

export default router;
