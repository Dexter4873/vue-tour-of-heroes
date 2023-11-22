import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import HeroesView from "@/views/HeroesView.vue";
import DetailHeroView from "@/views/DetailHeroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView
    },
    {
      path: "/heroes/detail/:id",
      name: "heroesDetail",
      component: DetailHeroView,
    },
    {
      path: "/heroes",
      name: "heroes",
      component: HeroesView
    }

  ]
});

export default router;
