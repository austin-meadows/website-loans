import { Router } from "@vaadin/router";

const router = new Router(document.body);
router.setRoutes([
  {
    path: "/",
    component: "x-app",
    children: [
      {
        path: "/",
        component: "v-home",
        action: async () => {
          await import("../views/Home");
        },
      },
      {
        path: "/sign-in",
        component: "v-signin",
        action: async () => {
          await import("../views/SignIn");
        },
      },
    ],
  },
]);

export default router;
