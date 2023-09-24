import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Home from "../views/Home.vue";
import MakeOffer from "../views/MakeOffer.vue";
import BuyPhones from "../views/BuyPhones.vue";
import insuranceCheckout from "../views/insuranceCheckout.vue";
import confirmCheckout from "../views/confirmCheckout.vue";


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
    {
      path: "/insurance-Checkout",
      name: "insuranceCheckout",
      component:insuranceCheckout ,
    },
    {
      path: "/confirm-Checkout",
      name: "confirmCheckout",
      component:confirmCheckout ,
    },
  ],
});

export default router;
