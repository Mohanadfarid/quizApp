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
      path: "/:id/examTakers",
      name: "examTakers",
      component: () => import("@/views/ExamTakers.vue"),
      meta: {
        title: "Exam Takers",
        requireAuth: true,
      },
    },
    {
      path: "/generateExam",
      name: "generateExam",
      component: () => import("@/views/GenerateExam.vue"),
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
