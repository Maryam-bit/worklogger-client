import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import AddLogs from "../views/AddLogs.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/add-logs",
    name: "add-logs",
    component: AddLogs,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
