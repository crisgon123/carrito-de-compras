import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Productos from "../views/Productos.vue"
import Carrito from "../views/Carrito.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
