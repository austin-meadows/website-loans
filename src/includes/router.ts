import { Router } from "@vaadin/router";

const router = new Router(document.body);
router.setRoutes([
  {
    children: [
      {
        action: async () => {
          await import("../views/Home");
        },
        component: "v-home",
        path: "/",
      },
      {
        action: async () => {
          await import("../views/SignIn");
        },
        component: "v-signin",
        path: "/sign-in",
      },
    ],
    component: "s-app",
    path: "/",
  },
]);

export default router;
