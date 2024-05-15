import { createRouter, createWebHistory } from "vue-router";
import BlankLayout from "@/layouts/BlankLayout.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/myExams",
      name: "myExams",

      component: () => import("@/views/MyExams.vue"),
    },
    {
      path: "/:id/examTakers",
      name: "examTakers",

      component: () => import("@/views/ExamTakers.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: { layout: BlankLayout },
    },
  ],
});

export default router;
