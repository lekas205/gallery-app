import { galleryRoutes } from "../constants/routes";
import { default as AppLayout } from "@/layouts/appLayout.vue";

export const homeRoutes = {
  path: "/",
  name: galleryRoutes.home.root.name,
  component: AppLayout,
  meta: {
    title: galleryRoutes.home.root.name,
  },
  children: [
    {
      path: "",
      name: galleryRoutes.home.root.name,
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: galleryRoutes.home.root.name,
      },
    },
  ],
};
