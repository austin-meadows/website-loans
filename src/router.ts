import { Router } from "@vaadin/router";

const router = new Router(document.body);
router.setRoutes([
  {
    path: "/",
    component: "app-root",
    children: [
      {
        path: "/",
        component: "v-home",
        action: async () => {
          await import("./views/Home");
        },
      },
    ],
  },
]);

export default router;
